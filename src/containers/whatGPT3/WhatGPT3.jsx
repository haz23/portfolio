import React from 'react';
import Feature from '../../components/feature/Feature';
import {cs, html, javascript, java, python, react } from './imports';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      About Me
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text"> I am a Web Developer and Front-End Engineer currently pursuing a Bachelor of Computer Science at Monash University. With a passion for creating intuitive and visually captivating web experiences, I love blending design and clean code to build user-centric websites.</h1>
    </div>
    <div className="gpt3__whatgpt3-feature">
      Development Tools
    </div>
    <div className="gpt3__brand section__padding">
    <div data-text="HTML5">
      <img src={html} alt="HTML" />
    </div>
    <div data-text="CSS5">
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
    <div data-text="React Native">
      <img src={react} />
    </div>
  </div>
  </div>
);

export default WhatGPT3;
