import React, { useState, useEffect } from "react";
import axiosClient from "../../axiosClient";

import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./photographer.css";

const Sidebar = ({ user }) => {


    return (
        <div className="sidebar">

            <div className="sidenavlogo">
                <span className="pholiologo">Pholio</span>
            </div>
            <div className="sidenavprofile">
                <img src="../../src/assets/sarah.jpg"></img>
                <span className="sidenavname">{user?.name}</span>

                <span className="sidenavcompany">{user?.company}</span>

            </div>

            <div className="sidenavlinks">
                <hr className="sidenavdivider" />

                <div className="sidenavlink">
                    <Link to="/galleries" className="side-link">
                        <i className="bi bi-grid-fill"></i>
                        Galleries
                    </Link>
                </div>
                <hr className="sidenavdivider" />
                <div className="sidenavlink">

                    <Link to="/clients" className="side-link list-group-item list-group-item-action">
                        <i className="bi bi-person-lines-fill"></i>
                        Clients
                    </Link>
                </div>
                <hr className="sidenavdivider" />

                <div className="sidebottom">
                    <hr className="sidenavdivider" />

                    <div className="sidenavlink">

                        <Link to="/help" className="bottomlink1 side-link  list-group-item list-group-item-action">
                            <i class="bi bi-patch-question-fill"></i>
                            Help                  </Link>
                    </div>

                    <div className="sidenavlink">

                        <Link to="/login" className="bottomlink2 side-link  list-group-item list-group-item-action">
                            <i class="bi bi-arrow-right-square-fill"></i>                            Log Out
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Sidebar;
