import React from 'react';
import { Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap';
import './photographer.css';
import LoginNavbar from './LoginNavbar';
import LoginPage from './LoginPage';



const LoginMain = () => {
  return (
    <div style={{ flex: '1' }}>
 
 <LoginNavbar />

<LoginPage />
    </div>
  );
};

export default LoginMain;
