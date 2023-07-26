//Upload happens here//Upload happens here
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Topbar from "../../components/photographer/Topbar";
import Sidebar from "../../components/photographer/Sidebar";
import ImageCard from "../../components/photographer/ImageCard";
import UploadButton from "../../components/photographer/UploadButton";

// import "../../components/client/Client.css";
import "../../App.css";
import "./GalleryDetail.css";

export default function GalleryDetail() {
  return (
    <>
      <div className="adminpage">
        <Sidebar />

        <div className="main">
          <div className="topbar">
            <Topbar />
          </div>
          <div className="content">
            <div className="imagescontainer">
              <UploadButton />
              <ImageCard />
              <ImageCard />
              <ImageCard />
              <ImageCard />
              <ImageCard />
              <ImageCard />
              <ImageCard />
              <ImageCard />
              <ImageCard />
              <ImageCard />
              <ImageCard />
              <ImageCard />
              <ImageCard />
            </div>
          </div>
        </div>
      </div>

      {/* <Card className="gallery">
                    <Card.Title>GalleryName</Card.Title>
                    <Card.Img src="..\src\assets\6_tn.jpg"></Card.Img>
                     {uploadedImages.map((image, index) => (
          <Card.Img key={index} src={image.url} />
        ))}
                </Card> */}
    </>
  );
}
