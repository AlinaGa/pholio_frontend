import React from 'react';
import { Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap';
import './photographer.css';


const AdminNavbar = () => {
  return (

    <>


        <Navbar expand="lg" className="NavBackground">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2 SearchBox mx-2 border-0" style={{ width: '500px' }} />
        </Form>
        <Button variant="btn" className='mx-3 Admin-button'>Search</Button>
        <Nav>
          <Nav.Link href="#icon1" className='mx-3'>Icon 1</Nav.Link>
          <Nav.Link href="#icon2" className='mx-3'>Icon 2</Nav.Link>
          <Nav.Link href="#icon3" className='mx-3'>Icon 3</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

</>



  );
};

export default AdminNavbar;
