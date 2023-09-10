import React from 'react';
import './contact.css';

const Contact = ({ title, text, logo, link}) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="contact-link">
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={logo} alt={title} />
                    <p>{text}</p>
                </div>
                <div className="flip-card-back">
                    <div />
                    <h1>{title}</h1>
                </div>
            </div>
        </div>
    </a>
);

export default Contact;
