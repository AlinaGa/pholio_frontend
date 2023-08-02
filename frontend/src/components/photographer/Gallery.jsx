import React, { useEffect, useState } from "react";
import { Card, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "../photographer/photographer.css";
import "../../App.css";
import axios from "axios";
import axiosClient from "../../axiosClient";


//ADD CLIENT NAME


const Gallery = ({ gallery, client }) => {
  const navigate = useNavigate();
  const [thumbnail, setThumbnail] = useState()
  useEffect(() => {
    console.log(gallery._id);
    axiosClient.get(`/image/thumbnail?gallery=${gallery._id}`)
      .then((response) => {
        setThumbnail(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(thumbnail);

  return (
    <Card
      className="gallery"
      onClick={() => navigate(`/gallery/${gallery._id}`)}
    >
      <Card.Img
        className="galleryimage"
        src={thumbnail || "../src/assets/11_tn.jpg"}
      ></Card.Img>
      <Card.Body className="gallerycontent">
        <div className="gallerytitle">{gallery.name}</div>
        <div className="galleryinfo ">
          <span className="imageamount">56 Gallery images</span>
          <span className="imageamount">Final Images</span>
        </div>
        <Badge pill className="assignedclient">
          {/* {client.name} */}
        </Badge>
      </Card.Body>
    </Card>
  );
};

export default Gallery;
