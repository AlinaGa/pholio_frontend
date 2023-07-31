import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./photographer.css";

const Sidebar = () => {
    return (



        <div className="sidebar">

            <div className="sidenavlogo">
                <span className="pholiologo">Pholio</span>
            </div>
            <div className="sidenavprofile">
                <span className="sidenavdetail">Photographer Name</span>
                <span className="sidenavdetail">Company Name</span>

            </div>

            <div className="sidenavlinks">
                <hr className="sidenavdivider" />

                <div className="sidenavlink">
                    <a className="side-link">
                        <i className="bi bi-grid-fill"></i>
                        <Link to="/galleries">Galleries</Link>
                    </a>
                </div>
                <hr className="sidenavdivider" />
                <div className="sidenavlink">

                    <a className="side-link list-group-item list-group-item-action">
                        <i className="bi bi-person-lines-fill"></i>
                        <Link to="/clients">Clients</Link>
                    </a>
                </div>
                <hr className="sidenavdivider" />

                <div className="sidebottom">
                    <hr className="sidenavdivider" />

                    <div className="sidenavlink">

                        <a className="bottomlink1 side-link  list-group-item list-group-item-action">
                            <i className="bi bi-heart-fill"></i>
                            <span>Help</span>
                        </a>
                    </div>

                    <div className="sidenavlink">

                        <a className="bottomlink2 side-link  list-group-item list-group-item-action">
                            <i className="bi bi-heart-fill"></i>
                            <span>Log Out</span>
                        </a>
                    </div>

                </div>

            </div>
        </div >



    );
};

export default Sidebar;