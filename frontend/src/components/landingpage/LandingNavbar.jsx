import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Button } from "react-bootstrap";

const LandingNavbar = () => {
  return (
    <div>
      <div style={{ flex: "1" }}>
        <Navbar expand="lg" className="Login-NavBackground">
          <Navbar.Brand className="pholiologo fw-bold fs-1" href="#home">
            Pholio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="#pricing" className="mx-3">
                Pricing
              </Nav.Link>
              <Nav.Link href="#icon2features" className="mx-3">
                Features
              </Nav.Link>
            </Nav>
            <Button variant="btn" className="mx-3 Admin-button">
              Login
            </Button>
            <Button variant="btn" className="mx-3 Admin-button">
              Register
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};
export default LandingNavbar;
