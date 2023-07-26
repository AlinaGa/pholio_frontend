import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import { PersonCheck, Globe2, Tags } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
import clients from "../../assets/clients.jpg";
import shop from "../../assets/shop.jpg";
import galleries from "../../assets/galleries.jpg";
import albums from "../../assets/albums.jpg";
import laptop from "../../assets/laptop.png";
import "../../App.css";
import "../../components/landingpage/landingpage.css";

import Footer from "../../components/landingpage/footer";
import LandingNavbar from "../../components/landingpage/LandingNavbar";

const HomePage = () => {
    return (
        <div>
            <LandingNavbar />
            <header className="landingheader">
                <video className="landingbanner" loop autoPlay muted><source src="..\src\assets\bannervid.mp4" type="video/mp4"></source></video>
                <h1 className="page-title">Welcome to Pholio</h1>
                <hr className="lpdivider" />

            </header>
            <div className="introtext">

                <p>
                    We offer photographers a simple solution to showcase their images to clients. Create unlimited galleries in just a few easy steps and let your clients see all their photoshoots at a glance. Your clients have never had an easier time viewing their pictures. Increase your image sales and strenghten your customer retention with our nice and clean design that perfectly stages your pictures!
                </p>
                <Button variant="btn" className="startnowbtn mx-3 mt-4">
                    Create Your Free Account
                </Button>
                <hr className="divider" />
            </div>

            <div className="sec2">
                {/* <img className="ftrimage" src="..\src\assets\banner5.jpg"></img> */}
                <div className="featurette">

                    <div className="feature col">
                        <div className="person-icon p-3"> </div>
                        <PersonCheck className="fs-1" />
                        <h4 className="mt-4">Easy to use</h4>
                        <p>
                            Our clear and organized design ensures that not only you but also your clients find the navigation incredibly simple!
                        </p>

                    </div>

                    <div className="feature col">
                        <div className="domain-icon p-3"></div>
                        <Globe2 className="fs-1" />
                        <h4 className="mt-4">Manage your Clients</h4>
                        <p>
                            Manage all of your clients in one place! Every client has their own password-protected area to view their galleries.
                        </p>

                    </div>
                    <div className="feature col">
                        <div className="preise-icon p-3"></div>
                        <Tags className="fs-1" />
                        <h4 className="mt-4">Multiple Galleries</h4>
                        <p>
                            Create as many galleries as you want for each of your clients! Set a different price per image in each gallery.
                        </p>

                    </div>
                </div>
            </div>

            <div className="test-phase">
                <p className="test p-5 fs-2 fw-bold ">30-Tägige Testphase</p>
                <Button variant="btn" className="mx-3 Admin-button mb-5">
                    Create Account
                </Button>
            </div>
            <Footer />
        </div >
    );
};

export default HomePage;
