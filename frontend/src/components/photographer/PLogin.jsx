import React, { useState } from "react";
import axiosClient from "../../axiosClient";
import { useNavigate } from "react-router-dom";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./photographer.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const PLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login } = useContext(AuthContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(formData);

    // axiosClient
    //   .post("/photographer/login", formData)
    //   .then((response) => {
    //     console.log(response.data);
    //     navigate("/galleries");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // console.log(formData);
  };

  return (
    <div className="register-layout">
      <div className="loginimage"></div>
      <div className="login-container">
        <span className="logintitle">Good to see you again!</span>
        <div className="loginform">
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

            <div className="registerbutton">
              <button className="register" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PLogin;
