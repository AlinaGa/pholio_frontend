import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./components/landingpage/Landingpage";
import "../src/components/landingpage/Landingpage.css";
import "./App.css";
import { useState } from 'react';
import AdminNavbar from './components/photographer/AdminNavbar';
import SideBar from './components/photographer/Sidebar';
import GalleryModal from './components/photographer/GalleryModal';
import LoginPage from './components/photographer/LoginPage';
import AdminMain from './components/photographer/AdminMain'; 
import LoginNavbar from './components/photographer/LoginNavbar';
import LoginMain from './components/photographer/LoginMain';
import ClientModal from './components/photographer/ClientModal';

function App() {
  return (

    <>
      <LandingPage />



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




    </>
  );
}

export default App;
