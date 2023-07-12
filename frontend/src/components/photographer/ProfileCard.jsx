import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const ProfileCard = () => {
  return (
    <Container>
      <Row>
        <Col md={5}>
          <Card style={{ width: '100%' }}>
            <Row>
              <Col md={1}>
                <div className="profile-image">
                  <Card.Img variant="top" src="profile.jpg" />
                </div>
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>이름</Card.Title>
                  <Card.Text>
                    비밀번호: ********
                  </Card.Text>
                </Card.Body>
              </Col>
              <Col md={3}>
                <div className="button-wrapper">
                  <Button variant="primary">Edit</Button>
                  <Button variant="danger">Delete</Button>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileCard;
