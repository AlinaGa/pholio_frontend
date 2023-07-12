import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const OrderList = () => {
  return (
    <Card>
      <Card.Body>
        <Row className="align-items-center">
          <Col>
            <h5>Order List</h5>
          </Col>
          <Col className="d-flex">
            <div className="mr-3">Order No.</div>
            <div>Date</div>
          </Col>
          <Col>
            <Button variant="primary">Button</Button>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <div className="order-image">
              <img src="order.jpg" alt="Order" />
            </div>
          </Col>
          <Col md={2}>
            <div>Customer ID</div>
          </Col>
          <Col md={8}>
            <div>Comment</div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

const Dashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h4>Dashboard</h4>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <OrderList />
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <h5>Additional Card</h5>
              {/* Additional Card 내용 추가 */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
