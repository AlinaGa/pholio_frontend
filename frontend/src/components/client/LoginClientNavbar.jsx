import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./client.css";
import "../../App.css";

const LoginClientNavbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Navbar collapseOnSelect expand="sm" className="sticky-top">
        <Navbar.Toggle
          aria-controls="navbarScroll"
          data-bs-target="#navbarScroll"
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="clientnavbar">
            {/* <NavLink eventKey={1} as={Link} to="/">Home</NavLink>

                        <NavLink eventKey={1} as={Link} to="/albumlist"> My Galleries</NavLink>

                        <NavLink eventKey={1} as={Link} to="/logout">LogOut</NavLink> */}

            {/* Prototype without real Linking */}
            <div className="clientnavleft"><NavLink to="/">
              <Navbar.Brand className="pholiologo fw-bold fs-1" href="#home">
                Pholio
              </Navbar.Brand></NavLink></div>
            <div className="clientnavmiddle">{user?.photographer?.company}</div>
            <div className="clientnavright">
              {/* make toggle cart button a component and add it here  */}

              {/* <button>
                <NavLink to="/albums">My Galleries</NavLink>
              </button>
              <button>
                <NavLink to="/clogin">Log Out</NavLink>
              </button> */}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default LoginClientNavbar;
