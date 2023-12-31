import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

import "./client.css";
import "../../App.css";

const ClientLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { clientLogin } = useContext(AuthContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
    clientLogin(formData);
  };

  return (
    <>
      <div className="clientlogin">
        <h3>Log in to see your Galleries</h3>

        <form onSubmit={handleSubmit} className="clientlogincontainer">
          <div className="clientloginfields">
            <label htmlFor="email"> </label>
            <input
              name="email"
              type="text"
              id="email"
              placeholder="E-Mail"
              // value={formData.email}
              onChange={handleInputChange}
              required
            />
            {/* <input className="form-control" type="text" /> */}
            <label htmlFor="password"></label>
            <input
              name="password"
              type="password"
              id="password"
              placeholder="Password"
              // value={formData.password}
              onChange={handleInputChange}
              required
            />
            {/* <input className="form-control" type="text" /> */}
          </div>
          <button className="register" type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default ClientLogin;
