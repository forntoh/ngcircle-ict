import React from "react";

import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { CallToAction } from "../components/callToAction/callToaction";

import ngc_house from "../assets/images/ngc_house.jpg";

export const Uber = () => (
  <div>
    <Header isExpanded={ false }/>
    <CallToAction description="ÜBER UNS" />
    <div
      className="primary-image"
      style={{ backgroundImage: `url(${ngc_house})` }}
    >
      <div style={{ margin: "300px 0" }} />
    </div>
    <div className="content-wrapper">
      <h2>Die NgC GmbH</h2>
      <p>
        Als IKT Dienstleister bieten wir unseren Kunden Individuelle Lösungen in
        allen Kommunikationsbereichen. Dazu gehört erfolgreiche
        Webkommunikation, Informationsdienstleistungen, Software und Hardware
        Lösungen und Kommunikation im automotive Bereich. Dabei gehen wir
        individuell auf unsere Kunden ein und suchen Lösungen, die nicht nur
        kurzfristige Probleme behandeln, sondern uns und unsere Kunden
        langfristig ans Ziel bringen.
      </p>
      <p>
        Als innovationsstarkes Unternehmen bleiben wir immer am Puls der Zeit.
        Und damit das so bleibt, steht für uns Nachhaltigkeit im Fokus.
        Nachhaltig unternehmerisch handeln heißt für uns Innovationsprojekte,
        die sich auf dem Markt behaupten können und Mitarbeiter, die sich
        konstant anhand ihrer Ziele weiterbilden. Dadurch schaffen wir
        Ressourcen, mit denen wir uns langfristig am Markt behaupten können.
      </p>
      <p>&emsp;</p>
    </div>
    <Footer />
  </div>
);

export default Uber;
