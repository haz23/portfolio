import React from 'react';
import './form.css';

const Form = () => (
  <div className="form-container">
    <div className="form">
      <span className="heading">Say Hello!</span>
      <input placeholder="Name" type="text" className="input" />
      <input placeholder="Email" id="mail" type="email" className="input" />
      <textarea
        placeholder="Message"
        rows="10"
        cols="30"
        id="message"
        name="message"
        className="textarea"
      ></textarea>
      <div className="button-container">
        <div className="send-button">Send</div>

      </div>
    </div>
  </div>
);

export default Form;
