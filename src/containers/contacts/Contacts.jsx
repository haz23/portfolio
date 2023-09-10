import React from 'react';
import Contact from '../../components/contact/Contact';
import {mail,github,linkedin} from './imports';

import './contacts.css';

const contactsData = [
  {
      title: 'Click Me',
      text: 'Email',
      logo: mail,
      link: 'mailto:ahmadhazeem7@gmail.com' // Email link
  },
  {
      title: 'Click Me',
      text: 'GitHub',
      logo: github,
      link: 'https://github.com/haz23' // GitHub profile link
  },
  {
      title: 'Click Me',
      text: 'LinkedIn',
      logo: linkedin,
      link: 'https://www.linkedin.com/in/ahmad-hazeem-167109284/' // LinkedIn profile link
  },
];

const Contacts = () => (
  <div className="contacts section__padding" id="contacts">
    <div className="contacts-heading">
      <h1>Contacts</h1>
    </div>
    <div className="contacts-container">
      {contactsData.map((item, index) => (
        <Contact date = {item.date}title={item.title} text={item.text} logo={item.logo} link={item.link} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Contacts;
