import React from 'react';
import { Card } from 'react-bootstrap';
// import { BsFillPatchPlusFill } from 'bootstrap-icons';
import "../photographer/photographer.css";
import "../../App.css";


const CreateClient = ({ onClickCreate }) => {
    return (
        <Card className='createclient' onClick={onClickCreate}>
            <i className="createicon bi bi-patch-plus-fill"></i>

            <div className='clientname'>Create new Client</div>

        </Card>
    )
}

export default CreateClient;

