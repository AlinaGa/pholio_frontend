import React, { useEffect, useState } from "react";
import axios from "axios";

import "./client.css";
import "../../App.css";

const ShopImage = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/image").then((res) => {
      setImages(res.data);
    });
  }, []);

  return (
    <>
      {images.map((res) => {
        return <img className="shopimage" src={res.url} />;
      })}


      {/* <img className="shopimage" src="..\src\assets\1.jpg" /> */}


      {/* <img className="shopimage selectedimg" src="..\src\assets\2_tn.jpg" /> */}
    </>
  );
};

export default ShopImage;
