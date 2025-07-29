import torch

class Dataset(torch.utils.data.Dataset):
    def __init__(self, df):
        self.input_ids = df['input_ids']
        self.attention_mask = df['attention_mask']
        self.labels = df['labels']

    def __getitem__(self, idx):
        return {
            "input_ids": torch.tensor(self.input_ids[idx], dtype=torch.long),
            "attention_mask": torch.tensor(self.attention_mask[idx], dtype=torch.long),
            "labels" : torch.tensor(self.labels[idx], dtype=torch.float) # tensor of length 7
        }
    
    def __len__(self):
        return len(self.input_ids)