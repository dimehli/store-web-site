
import React, { useState } from 'react';
import './Contact.css'; 
const Contact = () => {
  const initialFormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis :', formData);
    setFormStatus({ submitted: true, success: true });
    setFormData(initialFormData);
  };

  return (
    <div className="contact-container">
      <h2>Contact us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name :
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          E-mail :
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
        Subject :
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Message :
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
      {formStatus.submitted && formStatus.success && (
        <div>
          <p className="success-message">Request sent successfully!!</p>
          
        </div>
      )}
    </div>
  );
};

export default Contact;


