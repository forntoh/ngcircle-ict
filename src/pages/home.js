import React from "react";

import "../index.css";
import "../App.css";

import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { CallToAction } from "../components/callToAction/callToaction";

import home_left from "../assets/images/home_left.svg";
import home_right from "../assets/images/home_right.svg";

import "./home.css";
import { ValueItem } from "../components/valueItem/valueItem";

export const HomePage = () => (
  <div>
    <Header />
    <CallToAction description="PERSÖNLICHE VIELFALT SCHAFFT DIVERSITÄT" />
    <div className="primary-image">
      <img src={home_left} alt="left" />
      <div className="right">
        <div>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </div>
        <img src={home_right} alt="right" />
      </div>
    </div>
    <div className="content-wrapper">
      <span>Wir leben Kommunikation</span>
      <p>
        Mit individuellen Lösungen in verschiedenen Kommunikationsbereichen sind wir Ihr Ideenpartner für erfolgreiche Kommunikation. Gemeinsam schaffen wir innovative Lösungen und einzigartige Wege, um Ihre Vorstellungen zu verwirklichen.
      </p>
      <p>
        Für neue Kommunikationswege und verbesserte Kundenkommunikation stehen wir Ihnen mit umfangreichem Expertenwissen zur Seite. Wir sind Ihr marktstarker Partner für digitale Kommunikationswege. Unser Anspruch auf langfristige und nachhaltige Partnerschaften ist Ihr Vorteil.
      </p>
    </div>
    <div className="wrapper-values">
      <ValueItem
        title="Unternehmen"
        description={[
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        ]}
      />
      <ValueItem
        title="Presse"
        description={[
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr:",
        ]}
      />
      <ValueItem
        title="Karriere"
        description={[
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr:",
        ]}
      />
    </div>
    <Footer />
  </div>
);

export default HomePage;
