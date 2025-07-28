import './Cards.css'
import Container from '../components/Container/Container.js';
import Bar from '../components/Bar/Bar.js'
import Action from '../components/Action/Action.js'
import NewInputButton from '../components/NewInputButton/NewInputButton.js';

export default function ResultCard() {
    return (
        <div id="result-card">
            <Container>
                <p className="medium blue">Results</p>
                <Bar label="Toxic" value={40} />
                <Action action="Warn" />
            </Container>
            <NewInputButton />
        </div>
    )
};