import torch
import torch.nn as nn
from transformers import AutoTokenizer
import numpy as np
from .models.regressor import Regressor

class Detector:
    def __init__(self, file): # file path
        self.model = Regressor()
        self.model.load_state_dict(torch.load(file, map_location='cpu'))
        self.model.eval()
        self.tokenizer = AutoTokenizer.from_pretrained("distilbert/distilbert-base-uncased")

    def tokenize(self, comment):
        encoding = self.tokenizer(comment, truncation=True, padding='max_length', max_length=128, return_tensors="pt")
        input_ids = encoding['input_ids']
        attention_mask = encoding['attention_mask']
        return input_ids, attention_mask
    
    def predict(self, comment):
        input_ids, attention_mask = self.tokenize(comment)
        with torch.no_grad():
            output = self.model(input_ids, attention_mask)
            prediction = output.cpu().numpy()[0]
        
        prediction = [max(0, min(1, val)) for val in prediction] # clips between [0,1]

        return prediction
    
    def determine_action(self, result):
        flag_threshold = 0.5
        warn_threshold = 1
        ban_threshold = 2

        weights = np.array([1, 2, 1.5, 3, 1.2, 2.5, 3])

        weighted_scores = result * weights
        aggregate_score = weighted_scores.sum()

        if aggregate_score < flag_threshold:
            action = "None"
        elif aggregate_score >= ban_threshold:
            action = "Ban"
        elif aggregate_score >= warn_threshold:
            action = "Warn"
        else:
            action = "Flag"
        
        return action, aggregate_score

