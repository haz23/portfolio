import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './form.css';

const Form = () => {
  const form = useRef();
  const [isMessageSent, setMessageSent] = useState(false); // State for the pop-up

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_k67sank',
        'template_cir2ggg',
        form.current,
        'icjE9XNn6Pljj_OKd' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true); // Set the state to show the pop-up
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form-container">
      <div className="form">
        <span className="heading">Say Hello!</span>
        <form ref={form} onSubmit={sendEmail}>
        <input placeholder="Name" type="text" name="user_name" className="input" />
          <input
            placeholder="Email"
            type="email"
            name="user_email"
            id="mail"
            className="input"
          />
          <textarea
            placeholder="Message"
            rows="10"
            cols="30"
            id="message"
            name="message"
            className="textarea"
          ></textarea>
          <div className="button-container">
            <input type="submit" value="Send" className="send-button" />
          </div>
        </form>
      </div>

      {/* Pop-up for "Message Sent" */}
      {isMessageSent && (
        <div className="popup">
          <p>Message Sent!</p>
        </div>
      )}
    </div>
  );
};

export default Form;
