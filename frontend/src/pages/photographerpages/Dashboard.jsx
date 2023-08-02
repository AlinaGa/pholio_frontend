import React, { useState, useEffect, useContext } from "react";
import Topbar from "../../components/photographer/Topbar";
import Sidebar from "../../components/photographer/Sidebar";
import { AuthContext } from "../../context/AuthProvider";


import "../../components/photographer/photographer.css";


const Dashboard = () => {
    const { user } = useContext(AuthContext);


    return (
        <>
            <div className="adminpage">
                <Sidebar user={user && user} />

                <div className="main">
                    <div className="topbar">
                        <Topbar />
                    </div>
                    <div className="content">

                    </div>
                </div>
            </div>
        </>
    )

};

export default Dashboard; 