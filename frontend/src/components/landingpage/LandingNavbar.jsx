import React from 'react';
import { Nav, Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../client/client.css";

import "../../App.css";

const LandingNavbar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="sm" className='sticky-top'>
        <Navbar.Toggle aria-controls='navbarScroll' data-bs-target="#navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className='landingnavbar'>
            {/* <NavLink eventKey={1} as={Link} to="/">Home</NavLink>

                        <NavLink eventKey={1} as={Link} to="/albumlist"> My Galleries</NavLink>

                        <NavLink eventKey={1} as={Link} to="/logout">LogOut</NavLink> */}

            {/* Prototype without real Linking */}
            <div className='landingnavleft'>
              <Navbar.Brand className="pholiologo fw-bold fs-1" href="#home">
                Pholio
              </Navbar.Brand>
            </div>
            <div className="landingnavright">

              {/* make toggle cart button a component and add it here  */}
              {/* <NavLink>Features</NavLink> */}

              <button>
                <NavLink>Sign in</NavLink>
              </button>
              <button className='register'>
                <NavLink>Register</NavLink>
              </button>
            </div>



          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default LandingNavbar;