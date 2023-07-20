import React from 'react';
import { Card } from 'react-bootstrap';

import "../photographer/photographer.css";
import "../../App.css";


const Client = () => {
    return (
        <Card className='client'>
            <Card.Img className="clientimage" src="..\src\assets\11_tn.jpg"></Card.Img>
            <Card.Body className='clientcontent'>
                <div className='clientname'>Client Name</div>
                <div className='clientinfo '>
                    <span className='clientmail'>
                        client@email.com
                    </span>
                    <span className='galleryamount'>
                        3 Galleries
                    </span>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Client;

