import React from 'react';
import { Card, Badge } from 'react-bootstrap';

import "../photographer/photographer.css";
import "../../App.css";


const Client = () => {
    return (
        <Card className='gallery'>
            <Card.Img className="galleryimage" src="..\src\assets\11_tn.jpg"></Card.Img>
            <Card.Body className='gallerycontent'>
                <div className='gallerytitle'>Gallery Name</div>
                <div className='galleryinfo '>
                    <span className='imageamount'>
                        56 Gallery images
                    </span>
                    <span className='imageamount'>
                        Final Images
                    </span>
                </div>
                <Badge pill className="assignedclient">Client Name</Badge>
            </Card.Body>
        </Card>
    )
}

export default Client;

