import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './photographer.css';

const LoginPage = () => {
  return (
    <Container fluid className="loginbox">
      
      <div className="loginbox">
        <div className="row no-gutters align-items-center justify-content-center" style={{ height: "100vh" }}>
          <div className="col-md-6 col-no-padding">
            <div className="photo-section"></div>
          </div>

          <div className="col-md-6 col-no-padding">
            <div className="login-section d-flex align-items-center justify-content-center">
              <Form className="login-form test">
                <Form.Group controlId="formID">
                  <Form.Control type="text" placeholder="Enter your ID" className='border-square' style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }} />
                </Form.Group>
                <Form.Group controlId="formPassword" style={{ marginTop: '10%', marginBottom: '10%' }}>
                  <Form.Control type="password" placeholder="Enter your password" className='border-square' style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }} />
                </Form.Group>
                <div className="d-flex justify-content-between">
                  <Button variant="secondary" type="button" className='border-square' style={{ color: 'black', backgroundColor: 'white', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Forget password</Button>
                  <Button variant="primary" type="submit" className='border-square' style={{ color: 'black', backgroundColor: 'white', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Login</Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
