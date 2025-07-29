import './NewInputButton.css'

export default function NewInputButton({ onClick }) {
    return (
        <div>
            <button className="new-input" onClick={onClick}>New Input</button>
        </div>
    )
};