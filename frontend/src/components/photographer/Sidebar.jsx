import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Sidebar
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem>이름</CDBSidebarMenuItem>
            <CDBSidebarMenuItem>이름2</CDBSidebarMenuItem>
            <CDBSidebarMenuItem>
              <a href="/">overview</a>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem>
              <a href="/galleries">galleries</a>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem>
              <a href="/clients">clients</a>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem>
              <a href="/orders">orders</a>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem>
              <a href="/settings">settings</a>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem>help/support</CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div className="sidebar-btn-wrapper" style={{ padding: '20px 5px' }}>
            <Button className="logout-button">log out</Button>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
