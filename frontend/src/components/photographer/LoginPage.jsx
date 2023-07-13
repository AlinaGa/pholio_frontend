import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './photographer.css';

const LoginPage = () => {
  return (
    <Container fluid className="loginbox">
      <Row noGutters className="align-items-center justify-content-center" style={{ height: "100vh" }}>
        <Col md={6} className="col-no-padding">
          <div className="photo-section">
          </div>
        </Col>

        {/* login */}
        <Col md={6} className="col-no-padding ">
          <div className="login-section d-flex align-items-center justify-content-center ">


            <Form className="login-form test">
              <Form.Group controlId="formID"   >
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
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
