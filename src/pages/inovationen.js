import React from "react";

import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { CallToAction } from "../components/callToAction/callToaction";

import inno from "../assets/images/inno.jpg";
import innov from "../assets/images/inno.svg";

export const InnovationenPage = () => (
  <div>
    <Header />
    <CallToAction description="INNOVATIONEN" />
    <div className="primary-image" style={{ backgroundImage: `url(${inno})` }}>
      <div style={{ flex: 1 }}></div>
      <img src={innov} style={{ margin: "200px 165px" }} alt="Innovationen" />
    </div>
    <div className="content-wrapper">
      <h2>LOREM IPSUM DOLOR SIT AMET</h2>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </p>
      <p>
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
    </div>
    <Footer />
  </div>
);

export default InnovationenPage;
