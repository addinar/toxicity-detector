# toxicity-detector

![Demo UI](frontend/public/assets/demo.gif)

## **Description**

This project is a simple NLP toxic comment detector coupled with an user-friendly interface. The machine learning model itself uses the pre-trained transformer model [DistilBERT](https://huggingface.co/distilbert/distilbert-base-uncased), and is further enhanced with [this dataset](https://huggingface.co/datasets/Koushim/processed-jigsaw-toxic-comments) using Torch. 

The project also explores simple CSS animations and was great practice for brushing up UI skills.

## **Tech Stack**
Frontend: Created with React
Backend: Powered using Flask server
ML: DistilBERT transformers model which uses transfer learning and further trained using Torch on 20,000 comments. Trained on [Google Colab](https://colab.research.google.com/drive/1gfbBc1hSW60OOB7IIjpzwmpEYMBt-PlH?usp=sharing).

## **How It Works**
[Diagram 1]([https://imgur.com/a/oN24cRa](https://www.dropbox.com/scl/fi/8r3qgd7pxyoeh8z275vpr/Section-5.jpg?rlkey=9g5bc6moi7ogecnwju5fr4p46&st=oshe0ija&dl=1))

## **Installation**
Make sure you have Python3 and node installed
If not already, have `tesseract` and `git-lfs` installed 
	macOS instructions:
```
brew install tesseract
brew install git-lfs
git lfs install
```
Clone the repository:
```
git clone https://github.com/addinar/toxicity-detector.git
```
Install dependencies and activate virtual environment for backend
macOS instructions:
```
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

## **Running the Application**
Open a double terminal
On one terminal:
```
cd backend
python app.py
```
On the other terminal:
```
npm run dev
```
## Lisence
Distributed under the MIT License.
