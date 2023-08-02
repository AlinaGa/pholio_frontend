// import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

import "../../pages/photographerpages/GalleryDetail.css";
import "../../App.css";

const ImageCard = ({ image }) => {
  return (
    <div className="uploadedimagecontainer">
      {/* <button className="downloadimage">
        <i className="bi bi-download"></i>
      </button> */}
      <button className="deleteimage">
        <i className="bi bi-trash3"></i>
      </button>
      <img className="uploadedimage" src={image.url} />
      <div className="imagecardbody"> {image.name.split("-image-")[1]} </div>
    </div>
  );
};

export default ImageCard;
