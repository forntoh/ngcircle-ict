import React from "react";

import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { CallToAction } from "../components/callToAction/callToaction";

import ngc_house from "../assets/images/philosophie.jpg";

export const Philosophie = () => (
  <div>
    <Header isExpanded={ false }/>
    <CallToAction description="FIRMENPHILOSOPHIE" />
    <div
      className="primary-image"
      style={{ backgroundImage: `url(${ngc_house})` }}
    >
      <div style={{ margin: "300px 0" }} />
    </div>
    <div className="content-wrapper">
      <h2>LOREM IPSUM DOLOR SIT AMET</h2>
      <p>
        Zentraler Bestandteil der NgC Philosophie ist die freie Entfaltung von
        eigenen Ideen und die dadurch persönlich entstehende Entwicklung, welche
        sich auf fachliche Kompetenzen aufbaut. Unsere Mitarbeiter haben die
        Möglichkeit sich im Unternehmen fortlaufend weiterzubilden, indem sie an
        Seminaren und Entwicklungsprogrammen teilnehmen.
      </p>
      <p>
        Neben der Fachkompetenz im IT-Bereich zählen für uns Innovativität,
        Motivation und die damit verbundene Nachhaltigkeit bei der Entstehung
        unserer Produkte oder Dienstleistungen. Durch internationale
        Kooperationsarbeiten sorgen wir für Individualität, womit wir
        automatisch eine UpToDate-Garantie gewährleisten. Ihre Anforderungen
        setzen wir mit hohen Qualitätsstandards um: Denn für uns steht Ihre
        Zufriedenheit an erster Stelle und ist Ziel unseres Unternehmens!
      </p>
      <p>&emsp;</p>
    </div>
    <Footer />
  </div>
);

export default Philosophie;
