//Upload happens here//Upload happens here
import React, { useEffect, useState, useContext } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import axiosClient from "../../axiosClient";
import Topbar from "../../components/photographer/Topbar";
import Sidebar from "../../components/photographer/Sidebar";
import ImageCard from "../../components/photographer/ImageCard";
import UploadButton from "../../components/photographer/UploadButton";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";


// import "../../components/client/Client.css";
import "../../App.css";
import "./GalleryDetail.css";

export default function GalleryDetail() {
  const { user } = useContext(AuthContext);

  const { id } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    axiosClient
      .get(`/image?gallery=${id}`)
      .then((response) => {
        console.log(response.data);
        setImages(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);




  return (
    <>
      <div className="adminpage">
        <Sidebar user={user} />

        <div className="main">
          <div className="topbar">
            <Topbar />
          </div>
          <div>
            <h2 className="dashboardpagetitle"> Upload your Images in this step. They will be shown to your Client in the Gallery.</h2>
          </div>
          <div className="content">
            <div className="imagescontainer">
              <UploadButton gallery={id} setImages={setImages} />
              {images.map((image) => {
                return <ImageCard image={image} />;
              })}
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
