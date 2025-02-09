import React from 'react';
import '../styles/contact.css';

const Contact = ({ darkMode }) => {
  return (
    <div className={`contact-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <h1>Contact Me</h1>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your Message" rows="5" required />
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>

      <div className="social-links">
        <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="mailto:your-email@example.com">
          <i className="fas fa-envelope"></i> Email
        </a>
      </div>
    </div>
  );
};

export default Contact;