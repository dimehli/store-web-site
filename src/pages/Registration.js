import React, { useState } from 'react';
import './Registration.css'; 

const Registration = () => {
  const initialFormData = {
    username: '',
    email: '',
    password: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données soumises :', formData);
    setFormData(initialFormData);
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
            <h2></h2>
      <label>
      Username:        
      <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <label>
        E-mail:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
      Password:       
       <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default Registration;
