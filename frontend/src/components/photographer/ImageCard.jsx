// import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import axiosClient from "../../axiosClient";

import "../../pages/photographerpages/GalleryDetail.css";
import "../../App.css";

const ImageCard = ({ image }) => {
  const handleDelete = () => {
    axiosClient.delete(`/image/${image.id}`)
      .then(response => {
        console.log("Image deleted successfully", response.data);
      })

      .catch((err) => {
        console.log("Error deleting image", err);
      });

  };


  return (
    <div className="uploadedimagecontainer">
      {/* <button className="downloadimage">
        <i className="bi bi-download"></i>
      </button> */}

      <button className="deleteimage" onClick={handleDelete}>
        <i className="bi bi-trash3"></i>
      </button>

      <img className="uploadedimage" src={image.url} />
      {/* <div className="imagecardbody"> {image.name.split("-image-")[1]} </div> */}
    </div>
  );
};

export default ImageCard;
