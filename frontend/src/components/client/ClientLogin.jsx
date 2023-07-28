import React, { useState } from "react";
import axios from "axios";

import "./client.css";
import "../../App.css";

const ClientLogin = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // axios
    //   .post("http://localhost:8000/client", {
    //     email,
    //     password,
    //   })
    //   .then((response) => {
    //     const token = response.data.token;
    //     console.log("Logged in successfully!", token);
    //   })
    //   .catch((error) => {
    //     console.error("Login failed:", error.response.data.error);
    //   });
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
