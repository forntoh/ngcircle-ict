import React from "react";

import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { CallToAction } from "../components/callToAction/callToaction";

import ngc from "../assets/images/NGC.jpg";
import new_globe from "../assets/images/logos/new-globe.svg";

export const NgC = () => (
  <div>
    <Header />
    <CallToAction description="WISSENSZENTRUM" backgroundColor="#DEB308" />
    <div className="primary-image" style={{ backgroundImage: `url(${ngc})` }}>
      <div style={{ flex: 1 }}></div>
      <img
        src={new_globe}
        style={{ margin: "240px 165px" }}
        alt="Innovationen"
      />
    </div>
    <div className="content-wrapper">
      <h2>NEW GLOBE CENTER</h2>
      <p>
        Seit 2021 befindet sich unser Firmenstandort in Wolfsburg. Im New Globe
        Center arbeiten wir nicht nur gemeinsam für den Erfolg unserer Kunden
        und Partner, sondern definieren unsere persönliche Definition von Work
        Life Balance. Flache Hierarchien werden mit kurzen Dienstwegen
        verknüpft, unsere Ressourcen werden geschont und so können wir auch als
        Unternehmen eine nachhaltige Personalstrategie fahren.
      </p>
      <p>
        Unsere Nachhaltigkeit findet sich auch im Gebäude wieder. Das begrünte
        Flachdach schafft eine Verbindung zwischen Architektur und Natur und
        besitzt einen hohen ökologischen Wert für die Umwelt. Gleichzeitig
        bietet das flache Dach auch die Möglichkeit zur Erweiterung des
        Standortes. Als Zentrum für Wissensaustausch bieten wir zusätzlich
        Co-Working Spaces und Schulungsräume für Unternehmen und Selbstständige
        an, die eine hervorragende Anbindung an die Autostadt Wolfsburg
        wünschen.
      </p>
      <p>
        Unser neues Firmengebäude in Wolfsburg ist nicht nur ein großer
        Meilenstein unserer Firmenhistorie. Im New Globe Center wachsen wir
        gemeinsam mit unseren Kunden über uns hinaus. Das Firmengebäude dient
        als gemeinsamer Arbeitsplatz und als Wissenszentrum: Für uns und unsere
        Kunden.
      </p>
      <p>&emsp;</p>
    </div>
    <Footer />
  </div>
);

export default NgC;
