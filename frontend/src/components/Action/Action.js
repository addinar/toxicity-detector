import './Action.css'

export default function Action({ action }) {
    return (
        <div className="action">
            <h4 className="medium">Suggested Action:</h4>
            <h3 className="bold blue">{ action }</h3>
        </div>
    )
};