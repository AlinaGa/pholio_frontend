import React, { useState, useEffect } from "react";
import axiosClient from "../../axiosClient";
import Client from "../../components/photographer/Client";
import CreateClient from "../../components/photographer/CreateClient";
import Topbar from "../../components/photographer/Topbar";
import Sidebar from "../../components/photographer/Sidebar";
import ClientModal from "../../components/photographer/ClientModal";
import "../../components/photographer/photographer.css";

const ClientList = () => {

  const [clients, setClients] = useState([]);

  const [isClientModalOpen, setIsClientModalOpen] = useState(false);

  const toggleClientModal = () => {
    setIsClientModalOpen((prevState) => !prevState);
  };

  useEffect(() => {
    axiosClient
      .get("/client")
      .then((response) => {
        console.log(response.data);
        setClients(response.data);
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
            <CreateClient onClickCreate={toggleClientModal} />

            {clients.map((client) => {
              return <Client client={client} key={client._id} />;
            })}
          </div>
        </div>
      </div>
      {isClientModalOpen && <ClientModal onClose={toggleClientModal} />}
    </>
  );
};

export default ClientList;
