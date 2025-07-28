import logo from './logo.svg';
import './App.css';
import Container from './components/Container/Container.js';
import UploadButton from './components/UploadButton/UploadButton.js';
import InputCard from './cards/InputCard.js';
import ResultCard from './cards/ResultCard.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="semibold heading">Toxicity Detector</h1>
      </header>

      <main className="main-container">
        <InputCard />
        <ResultCard />
      </main>

      <footer>
        <p className="semibold footer-text">Detections are experimental. Use with disrection. | Made with Transformers + Torch + React + Flask | Github </p>
      </footer>
    </div>
  );
}

export default App;
