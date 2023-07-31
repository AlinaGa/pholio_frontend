import React, { useRef, useEffect } from 'react';
import { Modal, Row, Col, Form, Button, Dropdown } from 'react-bootstrap';
import './photographer.css';

const GalleryModal = () => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (dropdownRef.current) {
      const modalWidth = document.querySelector('.modal-content').offsetWidth;
      dropdownRef.current.style.width = `calc(${modalWidth}px - 2rem)`;
    }
  }, []);

  return (
    <Modal show={true} className="custom-modal">

      <Modal.Header closeButton className='modalheader' >
        <Modal.Title>Title</Modal.Title>
      </Modal.Header>
      <Modal.Body>





        <Row className='modalframe'>

          <Col md={8} className='nameform'>
            <Form >
              <Form.Group controlId="formGalleryName">
                <Form.Control type="text" placeholder="Gallery name" className='border-square mt-5' />
              </Form.Group>
            </Form>
          </Col>




          <Col md={4} className='nameform'>
            <Form >
              <Form.Group controlId="formDate " >
                <Form.Control className='border-square mt-5' type="date" />
              </Form.Group>
            </Form>
          </Col>





          <Col>
            <Dropdown className='dropdownbox border-square'>
              <Dropdown.Toggle
                ref={dropdownRef}
                variant="light"
                id="dropdownCustomers"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                  paddingRight: '1rem',
                }}
                className='border-square'
              >
                <span
                  style={{
                    marginLeft: '0.5rem',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    maxWidth: '100%',
                  }}

                >
                  Customers
                </span>
              </Dropdown.Toggle >


              <Dropdown.Menu style={{ minWidth: '100%' }} className='togglebox border-square'>
                <Dropdown.Item>Customer 1</Dropdown.Item>
                <Dropdown.Item>Customer 2</Dropdown.Item>
                <Dropdown.Item>Customer 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>





      </Modal.Body>
      <Modal.Footer>
        <Button className='modalbutton'>Create</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GalleryModal;
