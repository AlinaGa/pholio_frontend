import React, { useRef, useEffect } from "react";
import { Modal, Row, Col, Form, Button } from "react-bootstrap";
import "./photographer.css";
import axiosClient from "../../axiosClient";

const ClientModal = ({ onClose }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (dropdownRef.current) {
      const modalWidth = document.querySelector(".modal-content").offsetWidth;
      dropdownRef.current.style.width = `calc(${modalWidth}px - 2rem)`;
    }
  }, []);

  return (
    <Modal show={true} className="creationmodal">
      <Modal.Header closeButton className="modalheader" onClick={onClose}>
        <Modal.Title className="modaltitle">New Client</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalbody">
        <Row className="modalframe">
          <Col md={12} className="d-flex justify-content-center">
            <Form className="w-75">
              <Form.Group controlId="formGalleryID">
                <Form.Control
                  type="text"
                  placeholder="Client Name"
                  className="border-square my-5"
                />
              </Form.Group>
              <Form.Group controlId="formGalleryID">
                <Form.Control
                  type="text"
                  placeholder="E-Mail"
                  className="border-square my-5"
                />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="border-square my-5"
                />
              </Form.Group>
              <div className="d-flex justify-content-end">
                <Button className="modalbutton">Create</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default ClientModal;
