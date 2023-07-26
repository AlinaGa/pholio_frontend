import React from 'react';
import { Card } from 'react-bootstrap';
// import { BsFillPatchPlusFill } from 'bootstrap-icons';
import "../photographer/photographer.css";
import "../../App.css";


const UploadButton = () => {
    return (
        <button className='uploadimages'>
            <i className="createicon bi bi-patch-plus-fill"></i>

            <div className='uploadimgs'>Upload Images</div>

        </button>
    )
}

export default UploadButton;

