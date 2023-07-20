import React from 'react';
import { Card } from 'react-bootstrap';

import "../../pages/photographerpages/GalleryDetail.css";
import "../../App.css";


const ImageCard = () => {
    return (
        <div className='uploadedimagecontainer'>
            <button className='deletegallery'><i className="bi bi-trash3"></i>
            </button>
            <img className="uploadedimage" src="..\src\assets\6_tn.jpg" />
            <div className='imagecardbody'>
            </div>
        </div >
    )
}

export default ImageCard;

