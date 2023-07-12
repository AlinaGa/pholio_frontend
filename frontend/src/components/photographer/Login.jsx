import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap'; // F
import './photographer.css';



const Login = () => {
   return (
      <Container>
        <Row>
          <Col sm={6}>
            {/* 사진을 넣을 곳 */}
          </Col>
          <Col sm={6}>
            <Row>
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>ID 입력</Form.Label>
                  <Form.Control type="text" placeholder="ID를 입력하세요" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>PASSWORD 입력</Form.Label>
                  <Form.Control type="password" placeholder="비밀번호를 입력하세요" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button className="button-white ">버튼 1</Button>
                <Button className="button-white">버튼 2</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  };
 
 export default Login;
