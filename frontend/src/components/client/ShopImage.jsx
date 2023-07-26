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
        return <img src={res.url} height="200" />;
      })}

      <img className="shopimage" src="..\src\assets\1_tn.jpg" />
      <img className="shopimage selectedimg" src="..\src\assets\2_tn.jpg" />
      <img className="shopimage" src="..\src\assets\3_tn.jpg" />
      <img className="shopimage" src="..\src\assets\11_tn.jpg" />
      <img className="shopimage" src="..\src\assets\5_tn.jpg" />
      <img className="shopimage" src="..\src\assets\4_tn.jpg" />
      <img className="shopimage" src="..\src\assets\6_tn.jpg" />
      <img className="shopimage" src="..\src\assets\7_tn.jpg" />
      <img className="shopimage" src="..\src\assets\8_tn.jpg" />
      <img className="shopimage" src="..\src\assets\9_tn.jpg" />
      <img className="shopimage" src="..\src\assets\10_tn.jpg" />
      <img className="shopimage" src="..\src\assets\11_tn.jpg" />
      <img className="shopimage" src="..\src\assets\12_tn.jpg" />
      <img className="shopimage" src="..\src\assets\13_tn.jpg" />
      <img className="shopimage" src="..\src\assets\14_tn.jpg" />
      <img className="shopimage" src="..\src\assets\15_tn.jpg" />
      <img className="shopimage" src="..\src\assets\16_tn.jpg" />
      <img className="shopimage" src="..\src\assets\12_tn.jpg" />
      <img className="shopimage" src="..\src\assets\17_tn.jpg" />
      <img className="shopimage" src="..\src\assets\18_tn.jpg" />
      <img className="shopimage" src="..\src\assets\19_tn.jpg" />
      <img className="shopimage" src="..\src\assets\20_tn.jpg" />
    </>
  );
};

export default ShopImage;
