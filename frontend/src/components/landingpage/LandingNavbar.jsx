import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "../landingpage/landingpage.css";

import "../../App.css";

const LandingNavbar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="sm" className="sticky-top">
        <Navbar.Toggle
          aria-controls="navbarScroll"
          data-bs-target="#navbarScroll"
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="landingnavbar">
            {/* <NavLink eventKey={1} as={Link} to="/">Home</NavLink>

                        <NavLink eventKey={1} as={Link} to="/albumlist"> My Galleries</NavLink>

                        <NavLink eventKey={1} as={Link} to="/logout">LogOut</NavLink> */}

            {/* Prototype without real Linking */}
            <div className="landingnavleft">
              <NavLink to="/">
                <Navbar.Brand className="pholiologo fw-bold fs-1" href="#home">
                  Pholio
                </Navbar.Brand></NavLink>
            </div>
            <div className="landingnavright">
              {/* make toggle cart button a component and add it here  */}
              {/* <NavLink>Features</NavLink> */}




              <NavLink to="/clogin">
                <button className="navbtnnormal">
                  Client Login
                </button>
              </NavLink>


              <NavLink to="/login">
                <button className="navbtnnormal">
                  User Login
                </button>
              </NavLink>

              <NavLink to="/register">
                <button className="navbtndark">
                  Register
                </button>
              </NavLink>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default LandingNavbar;
