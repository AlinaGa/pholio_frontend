import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  


import Navbar from './components/photographer/Navbar'
import Button from './components/photographer/AdminButton';
import Login from './components/photographer/Login';
import Sidebar from './components/photographer/Sidebar';
import GalleryModal from './components/photographer/GalleryModal';
import ProfileCard from './components/photographer/ProfileCard';
import OrderList from './components/photographer/OrderList';

function App() {

  return (
  

<>
    <h1>test</h1>
 
    {/* < Navbar />
    < Button />
    <Login />
    < Sidebar />
    < GalleryNavbar />  
    < GalleryModal />
  <ProfileCard />
*/}


<OrderList / >
  
    </>
  )
}

export default App
