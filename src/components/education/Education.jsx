import React from 'react';
import './education.css';

const Education= ({ title, text, date, logo }) => (
  <div className="edu-container">
    <div className="edu-container-date">
      <div />
      <h2>{date}</h2>
    </div>
    <div className="edu-container-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="edu-container-text">
      <p>{text}</p>
    </div>
    <div className="edu-container-logo">
      <img src={logo} alt={title} /> {/* Use the src attribute */}
    </div>
  </div>
);

export default Education;
