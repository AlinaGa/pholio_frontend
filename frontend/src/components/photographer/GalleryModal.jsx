import React from 'react';
import { Modal, Row, Col, Form, Button, Dropdown } from 'react-bootstrap';
import './photographer.css';


const CustomModal = () => {
  return (
    <Modal show={true} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Modal Title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row style={{ background: 'blue', height: '30%' }}></Row>
        <Row>
          <Col xs={8}>
            <Form>
              <Form.Group controlId="formGalleryName">
                <Form.Label>Gallery Name</Form.Label>
                <Form.Control type="text" placeholder="Enter gallery name" />
              </Form.Group>
            </Form>
          </Col>
          <Col xs={4}>
            <Form>
              <Form.Group controlId="formDate">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdownCustomers">
                Customers
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Customer 1</Dropdown.Item>
                <Dropdown.Item>Customer 2</Dropdown.Item>
                <Dropdown.Item>Customer 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
