import React, { useState } from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./photographer.css";

const PLogin = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyname: '',
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform your form submission or validation logic here
    console.log(formData);
  };
  return (
    <div className="register-layout">
      <div className='loginimage'>
      </div>
      <div className='login-container'>
        <span className='logintitle'>Good to see you again!</span>
        <div className='loginform'>
          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className='registerbutton'>
              <button className="register" type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PLogin;



