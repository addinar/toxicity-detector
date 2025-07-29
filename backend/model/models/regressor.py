from transformers import AutoModel
import torch.nn as nn
import torch

class Regressor(nn.Module):
    def __init__(self):
        super().__init__()
        self.bert = AutoModel.from_pretrained("distilbert/distilbert-base-uncased")
        self.regressor = nn.Linear(self.bert.config.hidden_size, 7) # 7 scores
    
    def forward(self, input_ids, attention_mask):
        output = self.bert(input_ids=input_ids, attention_mask=attention_mask)
        cls_output = output.last_hidden_state[:, 0]
        scores = self.regressor(cls_output)
        return scores