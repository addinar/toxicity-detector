from flask import Flask, request, jsonify
from flask_cors import CORS
import pytesseract
import cv2
import numpy as np
from model.detector import Detector

app = Flask(__name__)
path = 'model/exports/model_v2.pt'
detector = Detector(path)

@app.after_request
def apply_cors(response):
    response.headers["Access-Control-Allow-Origin"] = "http://localhost:3000"
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type"
    return response

@app.route('/')
def home():
    return "Backend is running!"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    comment = data.get("comment", "")

    if not comment:
        return jsonify({"error": "Please enter a comment."}), 400

    labels = ['Toxic', 'Severe', 'Obscene', 'Threat', 'Insult',
       'Identity Attack', 'Sexually Explicit']

    scores = detector.predict(comment)
    results = dict(zip(labels, [float(s) for s in scores]))

    action, aggregate_score = detector.determine_action(scores)
    results["action"] = action
    results["aggregate_score"] = float(aggregate_score)

    return jsonify(results)


@app.route('/image_upload', methods=['POST'])
def image_upload():
    file = request.files["image"]
    file_bytes = np.frombuffer(file.read(), np.uint8)
    img = cv2.imdecode(file_bytes, cv2.IMREAD_COLOR)

    text = pytesseract.image_to_string(img)

    return jsonify({"text": text})

    

if __name__ == '__main__':
    app.run(debug=True, port=5050)