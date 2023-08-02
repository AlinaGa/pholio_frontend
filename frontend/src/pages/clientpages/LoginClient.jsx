import React from 'react';
import LoginClientNavbar from '../../components/client/LoginClientNavbar';
import ClientLogin from '../../components/client/ClientLogin';
import '../../components/client/client.css';

const LoginClient = () => {
    return (
        <>
            <LoginClientNavbar />
            <div className="image-container">
                <img className="cloginimg" src="..\src\assets\SchneckenVB.jpg" alt="Background" />
            </div>
            <div className="clogin-container">
                <ClientLogin />
            </div>

        </>
    );
}

export default LoginClient;