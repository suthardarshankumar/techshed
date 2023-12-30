import React from 'react';
import './css/Contact.css';

const Contact = () => {
  return (
    <section>
      <div className="contact-container">
        <h2>Contact Us</h2>
        <form className="contact-form" action="submit_contact_form" method="post">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input className="custom-control-input" type="text" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input className="custom-control-input" type="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="custom-control-input" name="message" rows="4" required></textarea>
          </div>
          <div className="form-group">
            <button className="btn-button" type="button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
