import React from "react";

import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { CallToAction } from "../components/callToAction/callToaction";

import kontakt from "../assets/images/kontakt.jpg";

export const Kontakt = () => (
  <div>
    <Header isExpanded={ false }/>
    <CallToAction description="KONTAKT" />
    <div
      className="primary-image"
      style={{ backgroundImage: `url(${kontakt})` }}
    >
      <div style={{ margin: "300px 0" }} />
    </div>
    <div className="content-wrapper">
      <p>&emsp;</p>
      <p>&emsp;</p>
      <p>&emsp;</p>
      <p>&emsp;</p>
      <p>&emsp;</p>
      <p>&emsp;</p>
      <p>&emsp;</p>
      <p>&emsp;</p>
    </div>
    <Footer />
  </div>
);

export default Kontakt;
