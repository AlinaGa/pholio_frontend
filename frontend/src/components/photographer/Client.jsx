import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

import "../photographer/photographer.css";
import "../../App.css";


const Client = ({ client }) => {
    const navigate = useNavigate();

    return (
        <Card className='client'
            onClick={() => navigate(`/client/${client._id}`)}
        >
            <Card.Img className="clientimage" src="..\src\assets\11_tn.jpg"></Card.Img>
            <Card.Body className='clientcontent'>
                <div className='clientname'>{client.name}</div>
                <div className='clientinfo '>
                    <span className='clientmail'>
                        {client.email}
                    </span>
                    <span className='galleryamount'>
                        {/* {client.password} */}
                        {/* {client.galleries.length} Gallery{client.galleries.length !== 1 ? 's' : ''} */}
                    </span>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Client;

