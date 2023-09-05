import React from 'react';
import './feature.css';

const Feature = ({ title, text, year }) => (
    
  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-year">
      <div />
      <h2>{year}</h2>
    </div>
    <div className="gpt3__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="gpt3__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
