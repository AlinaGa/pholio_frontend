import React, { useState } from "react";
import axiosClient from "../../axiosClient";

import "./client.css";
import "../../App.css";

const ClientLogin = () => {
  const navigate = useNavigate();
  const [isLoading, setIsloading] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    axiosClient
      .post("/client/login", data)
      .then((response) => {
        setFormData(response.data);
        setIsloading(false);
        navigate("/galleries");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="clientlogin">
        <h3>Login to see your Galleries</h3>

        <form onSubmit={handleFormSubmit} className="clientlogincontainer">
          <div className="clientloginfields">
            <label htmlFor="">Email Address</label>
            <input
              id="email"
              className="form-control"
              type="text"
              // value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* <input className="form-control" type="text" /> */}
            <label htmlFor="">Password</label>
            <input
              id="password"
              className="form-control"
              type="password"
              // value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <input className="form-control" type="text" /> */}
          </div>
          <button onClick={() => alert("Logged in successfully!")}>
            Log In!
          </button>
        </form>
      </div>
    </>
  );
};

export default ClientLogin;
