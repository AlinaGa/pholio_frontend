import React from 'react';
import ClientNavbar from '../../components/client/ClientNavbar';
import ClientLogin from '../../components/client/ClientLogin';
import '../../components/client/client.css';

const LoginClient = () => {
    return (
        <>
            <ClientNavbar />
            <ClientLogin />
        </>
    );
}

export default LoginClient;