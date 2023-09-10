import React from 'react';

import { Footer, Projects, Form, Educations, Skills, Header, Contacts } from './containers';
import { Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <Navbar />
    
    <div className="gradient__bg">
      <Header />
    </div>
    <Skills />
    <Educations />
    <div className="proj__bg">
      <Projects />
    </div>    
    <Contacts/>
    <Form/>
    <Footer />
  </div>
);

export default App;