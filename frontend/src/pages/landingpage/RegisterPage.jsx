import React from "react";
import LandingNavbar from "../../components/landingpage/LandingNavbar";
import Register from "../../components/landingpage/Register";
import "../../components/landingpage/landingpage.css";
import "../../components/photographer/photographer.css";

const RegisterPage = () => {

    return (
        <>
            <div className="pagebody">
                <LandingNavbar />
                <Register />
            </div>
        </>
    );
}


export default RegisterPage;
