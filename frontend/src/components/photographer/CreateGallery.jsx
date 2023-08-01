import React from 'react';
import { Card } from 'react-bootstrap';
// import { BsFillPatchPlusFill } from 'bootstrap-icons';
import "../photographer/photographer.css";
import "../../App.css";


const CreateGallery = ({ onClickCreate }) => {
    return (
        <Card className='creategallery' onClick={onClickCreate}>
            <i className="createicon bi bi-patch-plus-fill"></i>

            <div className='clientname'>Create new Gallery</div>

        </Card>
    )
}

export default CreateGallery;

