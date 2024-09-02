import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert('Message sent! Thank you for reaching out.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>If you have any questions or just want to say hello, feel free to reach out!</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:ajaykreddy1.akr@gmail.com">ajaykreddy1.akr@gmail.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:+918881288867">+91 88812 88867</a></li>
            <li><strong>Address:</strong> 8-23, Pyramid House, Old Bank Bazar, V Reddypalem, Rompicherla M.D, Palnadu D.T - 522617</li>
          </ul>
        </div>
        <div className="contact-form">
          <h3>Send a Message</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
