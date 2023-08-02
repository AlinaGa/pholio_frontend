import React from 'react';
import ClientNavbar from '../../components/client/ClientNavbar';
import ClientLogin from '../../components/client/ClientLogin';
import '../../components/client/client.css';

const LoginClient = () => {
    return (
        <>
            <ClientNavbar />
            <div className="image-container">
                <img className="cloginimg" src="..\src\assets\SchneckenVB.jpg" alt="Background" />
            </div>
            <div className="login-container">
                <ClientLogin />
            </div>

        </>
    );
}

export default LoginClient;