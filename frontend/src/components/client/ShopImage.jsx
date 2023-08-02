import React, { useEffect, useState } from "react";
import axiosClient from "../../axiosClient";

import "./client.css";
import "../../App.css";

const ShopImage = ({ img }) => {


  return (
    <>
      <img className="shopimage" src={img.url} alt="Shop Image" />


      {/* <img className="shopimage" src="..\src\assets\1.jpg" /> */}

      {/* <img className="shopimage selectedimg" src="..\src\assets\2_tn.jpg" /> */}
    </>
  );
};

export default ShopImage;
