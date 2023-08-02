import React, { useState, useEffect, useContext } from "react";
import axiosClient from "../../axiosClient";
import Gallery from "../../components/photographer/Gallery";
import CreateGallery from "../../components/photographer/CreateGallery";
import Topbar from "../../components/photographer/Topbar";
import Sidebar from "../../components/photographer/Sidebar";
import GalleryModal from "../../components/photographer/GalleryModal";
import "../../components/photographer/photographer.css";
import { AuthContext } from "../../context/AuthProvider";


const GalleryList = () => {
  const { user } = useContext(AuthContext);

  const [galleries, setGalleries] = useState([]);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [clients, setClients] = useState([]);


  const toggleGalleryModal = () => {
    setIsGalleryModalOpen((prevState) => !prevState);
  };


  useEffect(() => {
    axiosClient
      .get("/gallery")
      .then((response) => {
        setGalleries(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  useEffect(() => {
    axiosClient
      .get("/photographer/clients")
      .then((response) => {
        setClients(response.data);
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
            <h2 className="dashboardpagetitle"> Create Galleries for your Clients here. You can assing a Client to a Gallery. This way every Client only sees the Galleries, that are meant for him. </h2>
          </div>
          <div className="content">
            <CreateGallery onClickCreate={toggleGalleryModal} />
            {galleries.map((gallery) => {
              const client = clients.find((c) => c._id === gallery.client);

              return <Gallery gallery={gallery} client={client} key={gallery._id} />;
            })}
          </div>
        </div>
      </div>
      {isGalleryModalOpen && <GalleryModal onClose={toggleGalleryModal}
        clients={clients} setGalleries={setGalleries} />}
    </>
  );
};

export default GalleryList;
