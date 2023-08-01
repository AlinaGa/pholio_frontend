import React, { useRef, useEffect } from "react";
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
            <Form className="w-75" onSubmit={handleSubmit}>

              <Form.Group controlId="formGalleryID">
                <Form.Control
                  type="text"
                  placeholder="E-Mail"
                  className="border-square my-5"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formGalleryID">
                <Form.Control
                  type="text"
                  placeholder="Client Name"
                  className="border-square my-5"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="border-square my-5"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <div className="d-flex justify-content-end">
                <Button className="modalbutton" type="submit">Create</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default ClientModal;
