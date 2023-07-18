import React from 'react';
import { Nav, Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./client.css";
import "../../App.css";

const ClientNavbar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="sm" className='sticky-top'>
                <Navbar.Toggle aria-controls='navbarScroll' data-bs-target="#navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className='clientnavbar'>
                        {/* <NavLink eventKey={1} as={Link} to="/">Home</NavLink>

                        <NavLink eventKey={1} as={Link} to="/albumlist"> My Galleries</NavLink>

                        <NavLink eventKey={1} as={Link} to="/logout">LogOut</NavLink> */}

                        {/* Prototype without real Linking */}
                        <div className='clientnavleft'>
                            {/* <button>back</button> */}
                        </div>
                        <div className="clientnavmiddle">
                            My Photographer
                        </div>
                        <div className="clientnavright">

                            {/* make toggle cart button a component and add it here  */}

                            <button>
                                <NavLink>My Galleries</NavLink>
                            </button>
                            <button>
                                <NavLink>Log Out</NavLink>
                            </button>
                        </div>



                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default ClientNavbar;