import React, { useState, useEffect, useContext } from "react";
import axiosClient from "../../axiosClient";
import Client from "../../components/photographer/Client";
import CreateClient from "../../components/photographer/CreateClient";
import Topbar from "../../components/photographer/Topbar";
import Sidebar from "../../components/photographer/Sidebar";
import ClientModal from "../../components/photographer/ClientModal";
import "../../components/photographer/photographer.css";

import { AuthContext } from "../../context/AuthProvider";

const ClientList = () => {
  const { user } = useContext(AuthContext);

  const [clients, setClients] = useState([]);
  const [isClientModalOpen, setIsClientModalOpen] = useState(false);

  const toggleClientModal = () => {
    setIsClientModalOpen((prevState) => !prevState);
  };

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
        <Sidebar user={user && user} />

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
      {isClientModalOpen && <ClientModal onClose={toggleClientModal} clients={clients} setClients={setClients} />}
    </>
  );
};

export default ClientList;
