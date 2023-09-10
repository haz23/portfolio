import React from 'react';
import Feature from '../../components/education/Education';
import {cs, html, javascript, java, python, react, figma, git, github, sql, nodejs, tailwind} from './imports';
import './skills.css';

const Skills = () => (
  <div className="skills section__margin" id="skills">
    <div className="skills-heading">
      Technical Skills
    </div>
    <div className="logo section__padding">
    <div data-text="HTML5">
      <img src={html} alt="HTML" />
    </div>
    <div data-text="CSS">
      <img src={cs} alt="CS" />
    </div>
    <div data-text="JavaScript">
      <img src={javascript} alt="JavaScript" />
    </div>
    <div data-text="Java">
      <img src={java} />
    </div>
    <div data-text="Python">
      <img src={python} />
    </div>
    <div data-text="NodeJs">
      <img src={nodejs} alt="nodejs" />
    </div>
    <div data-text="SQL">
      <img src={sql} alt="SQL" />
    </div>

    <div data-text="Tailwind CSS">
      <img src={tailwind} />
    </div>
    <div data-text="React Native">
      <img src={react} />
    </div>
    <div data-text="Git">
      <img src={git} />
    </div>
    <div data-text="Github">
      <img src={github} />
    </div>
    <div data-text="Figma">
      <img src={figma} />
    </div>
  </div>
  </div>
);

export default Skills;
