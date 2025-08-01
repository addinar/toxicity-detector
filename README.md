# toxicity-detector

![Demo UI](frontend/public/assets/demo.gif)

## **Description**

This project is a simple NLP toxic comment detector coupled with an user-friendly interface. The model itself uses transfer learning, taking [DistilBERT](https://huggingface.co/distilbert/distilbert-base-uncased), a well-known language modeling transformer, and is fine tuned into a regressor. The model was trained on [this dataset](https://huggingface.co/datasets/Koushim/processed-jigsaw-toxic-comments) using Torch.

The project also explores simple CSS animations and was great practice for brushing up UI skills.

## **Tech Stack**
Frontend: Created with React
Backend: Powered using Flask server
ML: DistilBERT transformers model which uses transfer learning and further trained using Torch on 20,000 comments. Trained on Google Colab.

## **How It Works**
![Diagram 1](frontend/public/assets/diagram-1.jpeg)
![Diagram 2](frontend/public/assets/diagram-2.png)
![Diagram 2](frontend/public/assets/diagram-3.png)

## **Installation**
Make sure you have Python3 and node installed.
If not already, have `tesseract` and `git-lfs` installed.

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
Install dependencies and activate virtual environment for backend.

macOS instructions:
```
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

## **Running the Application**
Open a double terminal.
On one terminal:
```
cd backend
python app.py
```
On the other terminal:
```
cd frontend
npm run dev
```
## Lisence
Distributed under the MIT License.
