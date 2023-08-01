import React, { useRef, useEffect, useState } from "react";
import axiosClient from "../../axiosClient";
import { useNavigate } from "react-router-dom";

import { Modal, Row, Col, Form, Button } from "react-bootstrap";
import "./photographer.css";

const ClientModal = ({ onClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosClient
      .post("/client", formData)
      .then((response) => {
        console.log(response.data);
        onClose();
        navigate("/clients");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(formData);
  };

  return (
    <Modal show={true} className="creationmodal">
      <Modal.Header closeButton className="modalheader" onClick={onClose}>
        <Modal.Title className="modaltitle">New Client</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalbody">
        <Row className="modalframe">
          <Col md={12} className="d-flex justify-content-center">
            <form onSubmit={handleSubmit}>

              <div className="form-group">
                {/* <label htmlFor="email">E-Mail</label> */}
                <input
                  name="email"
                  type="text"
                  placeholder="E-Mail"
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                {/* <label htmlFor="name">Name</label> */}
                <input
                  name="name"
                  type="text"
                  placeholder="Client Name"
                  // className="border-square my-7"
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                {/* <label htmlFor="password">Password</label> */}
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  // className="border-square my-5"
                  onChange={handleInputChange}
                  required
                />
              </div>


              <div className="d-flex justify-content-end">
                <Button className="modalbutton" type="submit">Create</Button>
              </div>
            </form>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default ClientModal;
