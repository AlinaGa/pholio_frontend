import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './photographer.css';


const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#portfolio1">XXX</Nav.Link>
          <Nav.Link href="#portfolio2">XXX</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;