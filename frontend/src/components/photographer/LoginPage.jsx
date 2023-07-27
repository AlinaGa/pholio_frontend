import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import "./photographer.css";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:8000/photographer/login", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container fluid className="loginbox">
      <div className="loginbox">
        <div className="row " style={{ height: "100vh" }}>
          <div className="col-md-6 col-no-padding">
            <div className="photo-section"></div>
          </div>

          <div className="col-md-6 col-no-padding">
            <div className="login-section d-flex align-items-center justify-content-center">
              <Form
                className="login-form test"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Form.Group controlId="formID">
                  <Form.Control
                    type="text"
                    placeholder="Enter your ID"
                    {...register("email", { required: true })}
                    className="border-square"
                  />
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    {...register("password", { required: true })}
                    className="border-square"
                  />
                </Form.Group>
                <div className="d-flex justify-content-between">
                  <Button type="button" className="border-square">
                    Forget password
                  </Button>
                  <Button type="submit" className="border-square">
                    Login
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
