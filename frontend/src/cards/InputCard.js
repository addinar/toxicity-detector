import './Cards.css'
import Container from '../components/Container/Container.js';
import UploadButton from '../components/UploadButton/UploadButton.js';
import TextArea from '../components/TextArea/TextArea.js'
import AnalyzeButton from '../components/AnalyzeButton/AnalyzeButton.js'

export default function InputCard() {
    return (
        <div id="input-card">
            <Container>
                <form>
                    <p className="medium">Upload a screenshot...</p>
                    <UploadButton />
                    <p className="medium">...or paste the text below.</p>
                    <TextArea />
                    <AnalyzeButton />
                </form>
            </Container>
        </div>
    )
};