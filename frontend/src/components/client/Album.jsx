import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import axiosClient from "../../axiosClient";

import "./client.css";
import "../../App.css";
import { useState } from "react";

const Album = ({ gallery }) => {
  const navigate = useNavigate();
  const [thumbnail, setThumbnail] = useState();

  useEffect(() => {
    // console.log(gallery._id);
    axiosClient
      .get(`/image/thumbnail?gallery=${gallery._id}`)
      .then((response) => {
        setThumbnail(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(thumbnail);

  return (
    <Card className="album" onClick={() => navigate(`/shop/${gallery._id}`)}>
      <Card.Img src={thumbnail || "../src/assets/noimages.jpg"}
      ></Card.Img>
      <div className="darkoverlay"></div>
      <Card.ImgOverlay className="albumcontent">
        <Card.Title>{gallery.name}</Card.Title>
        {/* <div className="albumbuttons "> */}
        {/* <button className="buttonwhite">Download</button> */}
        {/* <Link to="/shop"> <button className="buttonwhite">View Gallery</button></Link>
        </div> */}
      </Card.ImgOverlay>
    </Card>
  );
};

export default Album;
