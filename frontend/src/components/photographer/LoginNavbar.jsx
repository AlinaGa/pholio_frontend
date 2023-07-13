
import React from 'react';
import { Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap';
import './photographer.css';

const LoginNavbar = () => {
  return (
    <div style={{ flex: '1' }}>
       <Navbar expand="lg" className="Login-NavBackground">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Button variant="btn" className='mx-3 Admin-button'>Register</Button>
          <Nav>
            <Nav.Link href="#icon1" className='mx-3'>Icon 1</Nav.Link>
            <Nav.Link href="#icon2" className='mx-3'>Icon 2</Nav.Link>
            <Nav.Link href="#icon3" className='mx-3'>Icon 3</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  </div>
  );
};

export default LoginNavbar;


