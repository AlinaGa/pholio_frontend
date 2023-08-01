import React from "react";
import { Card, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "../photographer/photographer.css";
import "../../App.css";


//ADD CLIENT NAME


const Gallery = ({ gallery }) => {
  const navigate = useNavigate();
  return (
    <Card
      className="gallery"
      onClick={() => navigate(`/gallery/${gallery._id}`)}
    >
      <Card.Img
        className="galleryimage"
        src="..\src\assets\11_tn.jpg"
      ></Card.Img>
      <Card.Body className="gallerycontent">
        <div className="gallerytitle">{gallery.name}</div>
        <div className="galleryinfo ">
          <span className="imageamount">56 Gallery images</span>
          <span className="imageamount">Final Images</span>
        </div>
        <Badge pill className="assignedclient">
          Client Name
        </Badge>
      </Card.Body>
    </Card>
  );
};

export default Gallery;
