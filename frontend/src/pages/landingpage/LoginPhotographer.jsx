import React from 'react';
import { Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap';
import '../../components/photographer/photographer.css';
import LandingNavbar from '../../components/landingpage/LandingNavbar';
import PLogin from '../../components/photographer/PLogin';



const PhotographerLoginPage = () => {
  return (
    <>
      <div classname="pagebody">
        <LandingNavbar />
        <PLogin />
      </div>
    </>
  );
};

export default PhotographerLoginPage;
