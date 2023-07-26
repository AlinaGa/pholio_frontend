// import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";

import "../../pages/photographerpages/GalleryDetail.css";
import "../../App.css";

const ImageCard = () => {
  //   const [images, setImages] = useState();
  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:8000/image")
  //       .then((response) => {
  //         console.log(response.data);
  //         setImages(response.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);

  return (
    <div className="uploadedimagecontainer">
      <button className="downloadimage">
        <i className="bi bi-download"></i>
      </button>
      <button className="deleteimage">
        <i className="bi bi-trash3"></i>
      </button>
      {/* {images.map((image) => {
        <div className="imagecardbody"></div>;
      })} */}
      <img className="uploadedimage" src="..\src\assets\6_tn.jpg" />
      <div className="imagecardbody"></div>
    </div>
  );
};

export default ImageCard;
