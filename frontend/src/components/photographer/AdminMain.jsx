import React from 'react';
import { Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap';
import './photographer.css';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import AdminNavbar from './AdminNavbar';
import Sidebar from './Sidebar';





const SidebarButton = ({ children }) => {
  return (
    <div className="sidebar-button-wrapper">
      <CDBSidebarMenuItem className="sidebar-button">{children}</CDBSidebarMenuItem>
    </div>
  );
};

const AdminMain = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>

      

      <Sidebar />
      < AdminNavbar />
     
    </div>
  );
};

export default AdminMain;
