import './Cards.css'
import Container from '../components/Container/Container.js';
import Bar from '../components/Bar/Bar.js'
import Action from '../components/Action/Action.js'
import NewInputButton from '../components/NewInputButton/NewInputButton.js';

export default function ResultCard( {result, onNewInput} ) {
    const labelKeys = ['Toxic', 'Severe', 'Obscene', 'Threat', 'Insult',
    'Identity Attack', 'Sexually Explicit'];

    console.log("Score: " + result.aggregate_score);

    return (
        <div id="result-card">
            <Container>
                <p className="medium blue">Results</p>
                {
                    labelKeys.map((label) => <Bar key={label} label={label} value={Math.round(result[label] * 1000) / 10} />)
                }
                <Action action={result.action} />
            </Container>
            <NewInputButton onClick={onNewInput}/>
        </div>
    )
};