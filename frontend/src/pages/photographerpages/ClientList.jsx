import React from "react";
import Client from "../../components/photographer/Client";
import CreateClient from "../../components/photographer/CreateClient";
import Topbar from "../../components/photographer/Topbar";
import Sidebar from "../../components/photographer/Sidebar";
import InfoBox from "../../components/client/Infobox";

import "../../components/photographer/photographer.css";

const ClientList = () => {
  return (
    <>
      <div className="adminpage">
        <Sidebar />

        <div className="main">
          <div className="topbar">
            <Topbar />
          </div>
          <div className="content">
            <CreateClient />
            <Client />
            <Client />
            <Client />
            <Client />
            <Client />
            <Client />
            <Client />
            <Client />
            <Client />
            <Client />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientList;
