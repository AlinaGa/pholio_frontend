import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

import { useState } from 'react';
import { Route, Routes } from "react-router-dom";

//landing pages
import LandingPage from "./pages/landingpage/Landingpage";
import LoginPage from './components/photographer/LoginPage';

//Photographer pages
import LoginMain from './pages/landingpage/LoginPhotographer';
import GalleryDetail from "./pages/photographerpages/GalleryDetail";
import LoginPhotographer from './pages/landingpage/LoginPhotographer';
import GalleryList from './pages/photographerpages/GalleryList';
import ClientList from './pages/photographerpages/ClientList';

// Client pages
import LoginClient from "./pages/clientpages/LoginClient";
import AlbumList from './pages/clientpages/AlbumList';
import Shop from './pages/clientpages/Shop';

//Stylesheets
import './App.css';
import "../src/components/landingpage/Landingpage.css";
import './components/client/client.css';
import './components/photographer/photographer.css';


function App() {
  return (

    //add <div classname="pagebody"> </div> to every PHOTOGRAPHER PAGE component to wrap around the content in the pages body. This will apply the background color to the page.

    <div className="App">

      {/* <LoginMain />   */}
      {/* < LoginNavbar />
      <LoginPage /> */}

      {/* <ClientModal /> */}
      {/* < AdminMain /> */}
      {/* <AdminNavbar />  */}
      {/* <SideBar /> */}
      {/* < GalleryModal /> */}


      <Routes>

        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPhotographer />} />
        {/* <Route path="/register" element={<RegisterPhotographer />} /> */}
        <Route path="/galleries" element={<GalleryList />} />
        <Route path="/clients" element={<ClientList />} />



        <Route path="/gallery" element={<GalleryDetail />} />

        <Route path="/clogin" element={<LoginClient />} />
        <Route path="/albums" element={<AlbumList />} />
        <Route path="/shop" element={<Shop />} />





        {/* EXAMPLE  */}
        {/* <Route path="/:photographerId/*" element={<ClientLogin />} /> */}
        {/* <Route path="/:photographerId/:clientId" element={<AlbumList />} /> */}
        {/* <Route path="/:photographerId/:clientId/:galleryId" element={<SpecificGallery />} /> */}
      </Routes>

    </div>

  );
}

export default App;

