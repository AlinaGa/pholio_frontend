import React, { useState, useEffect } from "react";
import axiosCLient from "../../axiosClient";
import Gallery from "../../components/photographer/Gallery";
import CreateGallery from "../../components/photographer/CreateGallery";
import Topbar from "../../components/photographer/Topbar";
import Sidebar from "../../components/photographer/Sidebar";
import InfoBox from "../../components/client/Infobox";
import ImageCard from "../../components/photographer/ImageCard";
import "../../components/photographer/photographer.css";

const ClientList = () => {
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    axiosCLient
      .get("/gallery")
      .then((response) => {
        console.log(response.data);
        setGalleries(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="adminpage">
        <Sidebar />

        <div className="main">
          <div className="topbar">
            <Topbar />
          </div>
          <div className="content">
            <CreateGallery />
            {galleries.map((gallery) => {
              return <Gallery gallery={gallery} key={gallery._id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientList;
