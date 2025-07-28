import './Bar.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Bar({ label, value }) {
  return (
    <div className="bar">
        <span className="regular">{label}</span>
        <div className="bar-wrapper">
            <div className="bar-fill" style={{ width: `${value}%` }}></div>
        </div>
        <span className="regular">{value}%</span>
    </div>
  )
};