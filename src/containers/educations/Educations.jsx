import React from 'react';
import Education from '../../components/education/Education';
import {monash,sunway,apis} from './imports';
import './educations.css';

const educationsData = [

  {
    date: '2021 - Present',
    title: 'Bachelor of Computer Science',
    text: 'Monash University',
    logo:monash
  },


  {
    date: '2020 - 2021',
    title: 'Monash University Foundation Year',
    text: 'Sunway College',
    logo: sunway
  },
  {
    date: '2020',
    title: 'Higher Secondary Education (IGCSE)',
    text: 'Asia Pacific Schools',
    logo: apis
  },


];

const Educations = () => (
  <div className="edus section__padding" id="educations">
    <div className="edus-heading">
      <h1>Education</h1>
    </div>
    <div className="edus-container">
      {educationsData.map((item, index) => (
        <Education date = {item.date}title={item.title} text={item.text} logo={item.logo} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Educations;
