import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Instagram,
  EnvelopeAt,
  Twitter,
  Telephone,
} from "react-bootstrap-icons";
import { Button } from "react-bootstrap";

import "./Landingpage.css";
import "../../App.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="icons">
          <Instagram className="insta m-3" />
          <EnvelopeAt className="env m-3" />
          <Twitter className="twitter m-3" />
          <Telephone className="tel m-3" />
        </div>
        <div className="subscription">
          <p>Subscribe to our Newsletter:</p>
          <form>
            <input type="email" id="email" name="email" placeholder="Email" />
            <Button variant="btn" className="mx-3 Admin-button m-5">
              Subscribe
            </Button>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
