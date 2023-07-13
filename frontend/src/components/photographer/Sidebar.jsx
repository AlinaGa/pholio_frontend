// Sidebar.jsx

import React from 'react';
import './photographer.css';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

const SidebarButton = ({ children }) => {
  return (
    <div className="sidebar-button-wrapper">
      <CDBSidebarMenuItem className="sidebar-button">{children}</CDBSidebarMenuItem>
    </div>
  );
};

const Sidebar = () => {
  return (
    <CDBSidebar style={{ width: '250px', backgroundColor: 'white', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>
    <CDBSidebarHeader className="sidebar-header">
      sidebar head
    </CDBSidebarHeader>
    <div className="sidebar-button-text">PhtoAdmin sidebar</div>
    <CDBSidebarContent>
      <CDBSidebarMenu>
        <SidebarButton>Button 8</SidebarButton>
        <SidebarButton>Button 2</SidebarButton>
        <SidebarButton>Button 3</SidebarButton>
        <SidebarButton>Button 4</SidebarButton>
        <SidebarButton>Button 5</SidebarButton>
      </CDBSidebarMenu>
    </CDBSidebarContent>
    <CDBSidebarFooter style={{ textAlign: 'center' }}>
      <div className="sidebar-btn-wrapper boxColor" style={{ padding: '20px 5px' }}>
        Sidebar Footer
      </div>
    </CDBSidebarFooter>
  </CDBSidebar>

  );
};

export default Sidebar;
