import React from "react";

import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { CallToAction } from "../components/callToAction/callToaction";

import zukunft from "../assets/images/logos/zukunft.png";

export const Auszeichnungen = () => (
  <div>
    <Header isExpanded={ false }/>
    <CallToAction description="AUSZEICHNUNGEN" />
    <div className="primary-image">
      <iframe
        title="NgC"
        width="1080"
        height="640"
        frameBorder="0"
        src="https://www.youtube.com/embed/O5Hq-gc8Wyo"
      ></iframe>
      <div>
        <img src={zukunft} alt="zukunft" />
        <p style={{ textAlign: "end", margin: "20px" }}>
          Unser Beitrag zur <br />
          Digitalisierung und <br />
          Fachkräftegewinnung
        </p>
      </div>
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
      <p>&emsp;</p>
    </div>
    <Footer />
  </div>
);

export default Auszeichnungen;
