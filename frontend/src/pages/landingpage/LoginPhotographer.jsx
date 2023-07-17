import React from 'react';
import { Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap';
import '../../components/photographer/photographer.css';
import LoginNavbar from '../../components/photographer/LoginNavbar';
import LoginPage from '../../components/photographer/LoginPage';



const LoginMain = () => {
  return (
    <div style={{ flex: '1' }}>

      <LoginNavbar />

      <LoginPage />

    </div>
  );
};

export default LoginMain;
