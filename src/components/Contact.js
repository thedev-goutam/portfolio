import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
 // const [status, setStatus] = useState('');

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setStatus('Thanks — this demo form does not send emails. Replace with your backend endpoint.');
  //   setTimeout(() => setStatus(''), 6000);
  // };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="contact-title">Get In Touch</h2>
            <p className="contact-description">
              Let's work together. Whether you need a full-stack developer or want to discuss an idea, I'm open to new opportunities and collaborations.
            </p>
            <div className="contact-card">
              <p className="contact-item">
                Email: <a href="mailto:thedeveloper.goutam@gmail.com" className="contact-link">thedeveloper.goutam@gmail.com</a>
              </p>
              <p className="contact-item">
                LinkedIn: <a href="https://www.linkedin.com/in/goutam-nayek-9a6813183/" className="contact-link">https://www.linkedin.com/in/goutam-nayek-9a6813183</a>
              </p>
              {/* <p className="contact-item">
                GitHub: <a href="#" className="contact-link">/yourusername</a>
              </p> */}
            </div>
          </div>

          {/* <form className="contact-form" onSubmit={handleSubmit}>
            <label className="form-label">Your Name</label>
            <input
              required
              className="form-input"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <label className="form-label">Your Email</label>
            <input
              required
              type="email"
              className="form-input"
              placeholder="you@example.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <label className="form-label">Message</label>
            <textarea
              required
              className="form-textarea"
              rows="5"
              placeholder="Tell me about your project"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <div className="form-submit">
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </div>

            {status && (
              <p className="form-status">{status}</p>
            )}
          </form> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;