import './TextArea.css';

export default function TextArea( {value, onChange} ){
    return (
        <div>
            <textarea className="text-area" rows="5" cols="25" value={value} onChange={onChange}/>
        </div>
    )
};