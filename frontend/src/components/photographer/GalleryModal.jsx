import React, { useState } from "react";
import axiosClient from "../../axiosClient";
import { Modal, Row, Col, Form, Button } from "react-bootstrap";

const GalleryModal = ({ onClose, clients, setGalleries }) => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    clientId: "",
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
      .post("/gallery", formData)
      .then((response) => {
        // console.log(response.data);
        setGalleries((prevGalleries) => [...prevGalleries, response.data]);
        console.log(response.data);
        onClose();
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(formData);
  };

  return (
    <Modal show={true} className="creationmodal">
      <Modal.Header closeButton className="modalheader" onClick={onClose}>
        <Modal.Title className="modaltitle">New Gallery</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalbody">
        <Row className="modalframe">
          <Col md={12} className="d-flex justify-content-center">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  name="name"
                  type="text"
                  placeholder="Gallery Name"
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  name="date"
                  type="date"
                  placeholder="Date"
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <select
                  name="clientId"
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a Client</option>
                  {clients?.map((client) => (
                    <option key={client._id} value={client._id}>
                      {client.name}
                    </option>
                  ))}
                </select>
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

export default GalleryModal;
