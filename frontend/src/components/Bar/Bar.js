import './Bar.css'
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Bar({ label, value }) {
  const [fill, setFill] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFill(value);
    }, 10);
    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div className="bar">
        <span className="regular">{label}</span>
        <div className="bar-wrapper">
            <div className="bar-fill" style={{ width: `${fill}%` }}></div>
        </div>
        <span className="regular">{value}%</span>
    </div>
  )
};