import React from 'react';
import { Navbar, Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import './photographer.css';

const GalleryNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Form inline>
          <FormControl type="text" placeholder="검색" className="mr-sm-2" />
   

        </Form>
        <Row className="align-items-center">
          <Col>
            <Button variant="primary">버튼</Button>
            <span className="icon">Icon1</span>
            <span className="icon">Icon2</span>
            <span className="icon">Icon3</span>
          </Col>
        </Row>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default GalleryNavbar;
