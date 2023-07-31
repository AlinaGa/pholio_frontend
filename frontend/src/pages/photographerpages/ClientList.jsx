import React, { useState } from "react";
import Client from "../../components/photographer/Client";
import CreateClient from "../../components/photographer/CreateClient";
import Topbar from "../../components/photographer/Topbar";
import Sidebar from "../../components/photographer/Sidebar";
import InfoBox from "../../components/client/Infobox";
import ClientModal from "../../components/photographer/ClientModal";

import "../../components/photographer/photographer.css";

const ClientList = () => {
  const [isClientModalOpen, setIsClientModalOpen] = useState(false);

  const toggleClientModal = () => {
    setIsClientModalOpen((prevState) => !prevState);
  };

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
            <Client />
            <Client />
            <Client />
          </div>
        </div>
      </div>
      {isClientModalOpen && <ClientModal onClose={toggleClientModal} />}
    </>
  );
};

export default ClientList;
