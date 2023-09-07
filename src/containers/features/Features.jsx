import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    date: '2020',
    title: 'Higher Secondary Education',
    text: 'Asia Pacific Schools',
  },
  {
    date: '2020 - 2021',
    title: 'Monash University Foundation Year',
    text: 'Sunway College',
  },
  {
    date: '2021 - Present',
    title: 'Bachelor of Computer Science',
    text: 'Monash University',
  },

];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Education</h1>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature date = {item.date}title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
