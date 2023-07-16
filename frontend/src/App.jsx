import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./components/landingpage/Landingpage";
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";

import AdminNavbar from './components/photographer/AdminNavbar';
import SideBar from './components/photographer/Sidebar';
import GalleryModal from './components/photographer/GalleryModal';
import LoginPage from './components/photographer/LoginPage';
import AdminMain from './components/photographer/AdminMain'; 
import LoginNavbar from './components/photographer/LoginNavbar';
import LoginMain from './components/photographer/LoginMain';
import ClientModal from './components/photographer/ClientModal';


import AlbumList from './pages/clientpages/AlbumList';
import Shop from './pages/clientpages/Shop';

import './App.css';
import "../src/components/landingpage/Landingpage.css";
import './components/client/client.css';
>>>>> main2

function App() {
  return (


    <>
      <LandingPage />
// <AlbumList />
    <Shop />


{/* <LoginMain />  */}
{/* 
< LoginNavbar />
<LoginPage /> */}


{/* 
<ClientModal /> */}
{/* < AdminMain /> */}
{/* <AdminNavbar />  */}
{/* <SideBar /> */}



{/* < GalleryModal /> */}

//   <Routes>
    //     <Route path="/" element={<Login />} />
    //     {/* <Route path="/:photographerId/*" element={<ClientLogin />} /> */}
    //     {/* <Route path="/:photographerId/:clientId" element={<AlbumList />} /> */}
    //     {/* <Route path="/:photographerId/:clientId/:galleryId" element={<SpecificGallery />} /> */}
    //   </Routes>


    </>
  );
}

export default App;

