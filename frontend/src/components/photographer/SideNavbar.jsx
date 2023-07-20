import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./photographer.css"; 

const SideNavbar = () => {
    return (
        
        <div className="sidenav">
            <div className="sidenavlogo">
                <span className="sidenavlogo">Pholio</span>
            </div>
            <hr />
            <div className="list-group list-group-flush">
                    <a className="list-group-item list-group-item-action my-2">
                         <i className="bi bi-heart-fill"></i>
                         <span>Galleries</span>
                    </a>
                <a className="list-group-item list-group-item-action my-2">
                    <i className="bi bi-heart-fill"></i>
                    <span>Clients</span>
                </a>
            </div>
        </div>

    );
};

export default SideNavbar;


        // <div className="sidenav">
            
        //     <h2 className="sidenavlogo">Pholio</h2>

        //     {/* Round Image */}
        //     <div className="profile-image">
        //         <img
        //             src="../../assets/18_tn.png"
        //             alt="Profile"
        //             width="100"
        //             height="100"
        //         />
        //     </div>

        //     <h4>John Doe</h4>

        //     <div className="nav-buttons">
        //         <Link to="/component1">Component 1</Link>
        //         <Link to="/component2">Component 2</Link>
        //         <Link to="/component3">Component 3</Link>
        //     </div>

           
        //     <div className="bottom-buttons">
        //         <div className="navbottombutton">Help</div>
        //         <div className="navbottombutton">Log Out</div>
                
        //     </div>
        // </div>




// import React from 'react';
// import { Navbar, Form, FormControl, Button, Nav, Container, Row, Col } from 'react-bootstrap';


// const SidebarButton = ({ children }) => {
//   return (
//     <div className="sidebar-button-wrapper">
//       <CDBSidebarMenuItem className="sidebar-button">{children}</CDBSidebarMenuItem>
//     </div>
//   );
// };

// const Sidebar = () => {
//   return (
//   <>
  
//   <Container fluid>
//         <Row>
//         <Col className="col-3 p-0">
//   <div className="sidebar-container" style={{ height: "100vh" }}>
//               <CDBSidebar style={{ width: '250px', backgroundColor: 'white', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>
//                 <CDBSidebarHeader className="sidebar-header">
//                   sidebar head
//                 </CDBSidebarHeader>
//                 <div className="sidebar-button-text">PhtoAdmin sidebar</div>
//                 <CDBSidebarContent>
//                   <CDBSidebarMenu>
//                     <SidebarButton>Button 8</SidebarButton>
//                     <SidebarButton>Button 2</SidebarButton>
//                     <SidebarButton>Button 3</SidebarButton>
//                     <SidebarButton>Button 4</SidebarButton>
//                     <SidebarButton>Button 5</SidebarButton>
//                   </CDBSidebarMenu>
//                 </CDBSidebarContent>
//                 <CDBSidebarFooter style={{ textAlign: 'center' }}>
//                   <div className="sidebar-btn-wrapper boxColor" style={{ padding: '20px 5px' }}>
//                     Sidebar Footer
//                   </div>
//                 </CDBSidebarFooter>
//               </CDBSidebar>
//             </div>
//           </Col>

//           <Col className="col-9">
//             <div className="content">

//             <Container>
//   <Row>
//     <Col className="d-flex flex-column p-3">
//       <div className="profilebox" style={{ height: '5em', width: '20em', border: '1px solid black' }}>
//         <div >profile box</div>
//       </div>

//       <div className="d-flex justify-content-between w-100">
//       <div className="order-list">
//   <table className="table">
//     <thead>
//       <tr>
//         <th>ID</th>
//         <th>Item</th>
//         <th>Quantity</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <td>1</td>
//         <td>Item 1</td>
//         <td>5</td>
//       </tr>
//       <tr>
//         <td>2</td>
//         <td>Item 2</td>
//         <td>3</td>
//       </tr>
//       <tr>
//         <td>3</td>
//         <td>Item 3</td>
//         <td>2</td>
//       </tr>
//     </tbody>
//   </table>
// </div>

//        <div>

//        <div className='order-card'>
//         <div >profile box</div>
//       </div>

//       <Button variant="btn" className=' Admin-button mt-4 w-100'>Search</Button>

//        </div>

//       </div>

//     </Col>
//   </Row>
// </Container>
            
//             </div>
//           </Col> 

//         </Row>
//       </Container> 
//   </>


//   );
// };

// export default Sidebar;
