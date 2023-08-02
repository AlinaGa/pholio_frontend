import React, { useState, useEffect, useContext } from "react";
import axiosClient from "../../axiosClient";

import Album from "../../components/client/Album";
import ClientNavbar from "../../components/client/ClientNavbar";
import "../../components/client/client.css";
import InfoBox from "../../components/client/Infobox";
import { AuthContext } from "../../context/AuthProvider";

const AlbumList = () => {
  const { user } = useContext(AuthContext);

  const [galleries, setGalleries] = useState([]);

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

  return (
    <>
      <ClientNavbar />
      <div className="albumlist">
        <section className="albumheadingsection">
          <h1 className="yourgalleries">Your Galleries</h1>
        </section>
        <p className="description">
          <i>
            Here you can see all of your galleries. Click on a Gallery to see
            the beautiful images the photographer has captured!!
          </i>
        </p>

        <hr className="hr" />

        <div className="albums">
          {galleries.map((gallery) => {
            return <Album gallery={gallery} key={gallery._id} />;
          })}

          {/* <Album />
                <Album />
                <Album />
                <Album />
                <Album />
                <Album />
                <Album />
                <Album />
                <Album />
                <Album />
                <Album />
                <Album /> */}
        </div>
      </div>
      {/* <InfoBox /> */}
    </>
  );
};

export default AlbumList;
