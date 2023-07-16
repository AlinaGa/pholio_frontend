import React from 'react';
import { Card } from 'react-bootstrap';

import "./client.css";
import "../../App.css";


const Album = () => {
    return (
        <Card className='album'>
            <Card.Img src="..\src\assets\6_tn.jpg"></Card.Img>
            <div className="darkoverlay"></div>
            <Card.ImgOverlay className='albumcontent'>
                <Card.Title>GalleryName</Card.Title>
                <div className='albumbuttons '>
                    <button className='buttonwhite'>
                        Download
                    </button>
                    <button className='buttonwhite'>
                        View Gallery
                    </button>
                </div>
            </Card.ImgOverlay>
        </Card>
    )
}

export default Album;

