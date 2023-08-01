import React, { useState, useEffect } from "react";
import axiosClient from "../../axiosClient";
import Gallery from "../../components/photographer/Gallery";
import CreateGallery from "../../components/photographer/CreateGallery";
import Topbar from "../../components/photographer/Topbar";
import Sidebar from "../../components/photographer/Sidebar";
import ImageCard from "../../components/photographer/ImageCard";
import GalleryModal from "../../components/photographer/GalleryModal";
import "../../components/photographer/photographer.css";

const GalleryList = () => {
  const [galleries, setGalleries] = useState([]);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);

  const toggleGalleryModal = () => {
    setIsGalleryModalOpen((prevState) => !prevState);
  };


  useEffect(() => {
    axiosClient
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
            <CreateGallery onClickCreate={toggleGalleryModal} />
            {galleries.map((gallery) => {
              return <Gallery gallery={gallery} key={gallery._id} />;
            })}
          </div>
        </div>
      </div>
      {isGalleryModalOpen && <GalleryModal onClose={toggleGalleryModal} />}
    </>
  );
};

export default GalleryList;
