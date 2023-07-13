import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AlbumList from './pages/clientpages/AlbumList';
import Shop from './pages/clientpages/Shop';

import './App.css';
import './components/client/client.css';

function App() {

  return (
    // <AlbumList />
    <Shop />


    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Login />} />
    //     {/* <Route path="/:photographerId/*" element={<ClientLogin />} /> */}
    //     {/* <Route path="/:photographerId/:clientId" element={<AlbumList />} /> */}
    //     {/* <Route path="/:photographerId/:clientId/:galleryId" element={<SpecificGallery />} /> */}
    //   </Routes>
    // </BrowserRouter>
  )
}



export default App
