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

const LandingPage = () => {
  return (
    <div>
      <LandingNavbar />
      <header className="text-center head-section ">
        <img className="landingbanner" src="..\src\assets\banner1.jpg"></img>
        {/* <h1 className="page-title">Wilkommen bei Pholio</h1>
        <Button variant="btn" className="mx-3 Admin-button m-5">
          Jetzt loslegen
        </Button> */}
      </header>
      <div className="containerDiv">
        <div className="text-center pt-5 pb-5 body-desc ">
          <p className="heading fs-2 fw-bold p-3">
            Deine Onlinegalerie mit wirklich fairen Preisen
          </p>
          <p className="body-par p-5">
            Wir bieten Fotografen eine einfach Lösung ihre Bilder an Kunden zu
            präsentieren. Erstelle Kundengalerie in Wenigen Schritten und habe
            alle Shootings eines Kunden auf einen Blick. Dein Kunde hat noch nie
            einfacher Bilder ausgewählt und du zahlst nur den Speicherplatz, den
            du auch wirklich verbrauchst!
          </p>
        </div>
        <hr className="divider" />
      </div>

      {/* <div className="containerDiv"> */}
      <div className="containerDiv text-center">
        <div className="row align-items-start d-flex p-5">
          <div className="col person-icon p-3">
            <PersonCheck className="fs-1" />
            <p>Easy to use</p>
            <p>
              Unser übersichtliches Design macht es nicht nur dir, sondern auch
              deinen Kunden die Bedienung so einfach wie möglich!
            </p>
          </div>
          <div className="col domain-icon p-3">
            <Globe2 className="fs-1" />
            <p>Manage your Clients</p>
            <p>
              Deine Galerien laufen unter deine Domain, sodass deine Kunden von
              Pholio nichs mitbekommen!
            </p>
          </div>
          <div className="col preise-icon p-3">
            <Tags className="fs-1" />
            <p>Multiple Galleries</p>
            <p>
              Create as many galleries as you want for each of your clients! They can
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}

      {/* <div className="text-center all-features p-5">
        <a href="#">
          <p>alle Features</p>
        </a>
      </div> */}
      <div className="fw-bold text-center middle-title p-5 fs-3 fw-bold">
        Zahle nur das, was du auch verbrauchst!
      </div>
      <div className="dashboard">
        <h2 className="fw-bold text-decoration-underline pb-2">Features</h2>
        <div className="shop">
          <img src={shop} alt="shop dashboard" width="500" />
          <div className="shop-dashboard">
            <h5 className="pl-5">Mehrere Gallerieren pro Kunde</h5>
            <p>
              Präsentieren Sie ihre Fotos professionell und bieten Sie auch die
              Möglichkeit zur Bestellung der BIlder auswahlen oder Bilder
              Downloads Optional auf einer Domain nutzerbar: www.theDomain.de
            </p>
          </div>
        </div>
        <div className="galleries">
          <img src={galleries} alt="galleries dashboard" width="500" />
          <div className="galleries-dashboard">
            <h5>Mehrere Gallerieren pro Kunde</h5>
            <p>
              Präsentieren Sie ihre Fotos professionell und bieten Sie auch die
              Möglichkeit zur Bestellung der BIlder auswahlen oder Bilder
              Downloads Optional auf einer Domain nutzerbar: www.theDomain.de
            </p>
          </div>
        </div>
        <div className="albums">
          <img src={albums} alt="albums dashboard" width="500" />
          <div className="albums-dashboard">
            <h5>Mehrere Gallerieren pro Kunde</h5>
            <p>
              Präsentieren Sie ihre Fotos professionell und bieten Sie auch die
              Möglichkeit zur Bestellung der BIlder auswahlen oder Bilder
              Downloads Optional auf einer Domain nutzerbar: www.theDomain.de
            </p>
          </div>
        </div>
        <div className="client">
          <img src={clients} alt="client dashboard" width="500" />
          <div className="clients-dashboard">
            <h5>Mehrere Gallerieren pro Kunde</h5>
            <p>
              Präsentieren Sie ihre Fotos professionell und bieten Sie auch die
              Möglichkeit zur Bestellung der BIlder auswahlen oder Bilder
              Downloads Optional auf einer Domain nutzerbar: www.theDomain.de
            </p>
          </div>
        </div>
      </div>
      <div className="align-items-center whyPholio">
        <h3>Testimonials</h3>
        <div style={{ display: "block", width: 900, padding: 30 }}>
          <Carousel>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100 testImg"
                src="..\src\assets\5_tn.jpg"
                alt="Image One"
              />
              <Carousel.Caption>
                <h6 className="fst-italic">Anonymous, Kunde</h6>
                <p>
                  Die Website selbst ist benutzerfreundlich und intuitiv, was
                  das Durchsuchen verschiedener Fotos erleichtert und außerdem
                  einen sicheren Speicher für Kundenerinnerungen bietet.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100 testImg"
                src="..\src\assets\cody-scott.jpg"
                alt="Image One"
              />
              <Carousel.Caption>
                <h6 className="fst-italic">Cody, Fotografin</h6>
                <p>
                  Die endgültigen Bilder haben meine Erwartungen übertroffen und
                  die Möglichkeit, den Kunden die Möglichkeit zu geben, die
                  Bilder auszuwählen, die ihnen gefallen, ist großartig!!!
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100 testImg"
                src="..\src\assets\cody-scott-m.jpg"
                alt="Image One"
              />
              <Carousel.Caption>
                <h6 className="fst-italic">Scott, Fotograf</h6>
                <p>
                  Pholio ist absolut unglaublich! Die gesamte Erfahrung verlief
                  reibungslos, ich empfehle sehr!!
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      <div className=" responsive-sec">
        <div className="text-center responsive-par">
          <h4>Responsive Design</h4>
          <hr className=" design-ul" />
          <p>
            Responsive Design für fancy ansicht auf Desktop und Mobilgeräten.
            Sieht fancy aus. Mehr Text einfach nur um diesen Block zu füllen und
            mehr fancy auszusehen.
          </p>
        </div>

        <img src={laptop} alt="laptop and phone image" width="300" />
      </div>

      
      <div className="test-phase">
        <p className="test p-5 fs-2 fw-bold ">30-Tägige Testphase</p>
        <Button variant="btn" className="mx-3 Admin-button mb-5">
          Jetzt Testphase beginnen
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
