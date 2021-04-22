import React from "react";

import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { CallToAction } from "../components/callToAction/callToaction";

import jobs from "../assets/images/jobs.jpg";

export const Karriere = () => (
  <div>
    <Header />
    <CallToAction description="KARRIERE" />
    <div className="primary-image" style={{ backgroundImage: `url(${jobs})` }}>
      <img style={{ margin: "300px 0" }} />
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

export default Karriere;
