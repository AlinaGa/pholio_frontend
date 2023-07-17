import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './photographer.css';

const LoginPage = () => {
  return (
    <Container fluid className="loginbox">

      <div className="loginbox">
        <div className="row " style={{ height: "100vh" }}>
          <div className="col-md-6 col-no-padding">
            <div className="photo-section"></div>
          </div>

          <div className="col-md-6 col-no-padding">
            <div className="login-section d-flex align-items-center justify-content-center">
              <Form className="login-form test">
                <Form.Group controlId="formID">
                  <Form.Control type="text" placeholder="Enter your ID" className='border-square' />
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Control type="password" placeholder="Enter your password" className='border-square' />
                </Form.Group>
                <div className="d-flex justify-content-between">
                  <Button type="button" className='border-square'>Forget password</Button>
                  <Button type="submit" className='border-square'>Login</Button>
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
