import React from "react";

import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { CallToAction } from "../components/callToAction/callToaction";

import jobs from "../assets/images/1tnc.jpg";
import { ValueItem } from "../components/valueItem/valueItem";

let actionColor = "#B3AAB0";
let primaryColor = "#00AFCB";

export const OneTnc = () => (
  <div>
    <Header isExpanded={ false }/>
    <CallToAction description="AUTOMOTIVE" backgroundColor={actionColor} />
    <div className="primary-image" style={{ backgroundImage: `url(${jobs})` }}>
      <div style={{ flex: 0.5 }}></div>
      <img
        src={process.env.PUBLIC_URL + "/assets/images/1tnc.svg"}
        style={{ margin: "200px 0", height: "250px" }}
        alt="Innovationen"
      />
      <div style={{ flex: 2 }}></div>
    </div>
    <div className="content-wrapper">
      <h2>1TNC</h2>
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
    <div
      className="content-wrapper"
      style={{ backgroundColor: primaryColor, color: "white" }}
    >
      <h2>
        DIENSTLEISTUNGEN FÜR DIE
        <br />
        AUTOMOBILBRANCHE
      </h2>
      <p>
        Mit Fokus in den Produktbereichen der Elektrik und Elektronik, arbeiten
        wir seit 2011 mit einem internationalen Ingenieurteam für innovative
        Systemlösungen.
      </p>
      <p>
        Die "Systemdiagnostik" ist ein Kunstwort aus der Firmengründung der 1TNC
        und beschreibt die Entwicklung von Methodiken, Prozesse, Daten und
        Tools, die zur besseren Diagnoseeffizienz eines Systems im gesamten
        Entwicklungsprozess und darüber hinaus integriert bzw. angewendet
        werden.
      </p>
      <br />
      <br />
    </div>
    <div className="wrapper-values">
      <ValueItem
        logo="/assets/images/icons/odx.svg"
        title="ODX"
        description={[
          "ODX (Open Diagnostic Data Exchange) ist eine formale Beschreibungssprache für die Fahrzeug- oder Steuergerätediagnose, die entwickelt wurde, um einen standardisierten Austausch zwischen Automobil-, Steuergeräte- und Toolhersteller zu ermöglichen.",
        ]}
        hasIcon
      />
      <ValueItem
        logo="/assets/images/icons/diagnose.svg"
        title="DIAGNOSE"
        description={[
          "Der rasant steigende Anteil an Elektronik-Komponenten in Fahrzeugen und deren Vernetzung und die damit verbundenen Probleme, die entstehen können, erfordern einen schnellen Einsatz um diese Fehler zu lokalisieren.",
          "Einsatz einer Diagnosesoftware in der Fahrzeugtechnik, mit dessen Hilfe die potenziellen Probleme eines komplexen Systems einfach, vollständig und dynamisch ermittelt werden können.",
        ]}
        hasIcon
      />
      <ValueItem
        logo="/assets/images/icons/testing.svg"
        title="TESTING"
        description={[
          "Testing im MOD (Mobile Online Dienste von Volkswagen, z. B. WeConnect), die für den Kunden als APP zur Verfügung gestellt wird. Der Fahrer kann sein Smartphone mit seinem Volkswagen verbinden und hat so Zugriff auf bestimmte Fahrzeugfunktionen und den Fahrzeugstatus.",
          "Damit diese Dienste reibungslos funktionieren, müssen in regelmäßigen Abständen Tests durchgeführt werden.",
        ]}
        hasIcon
      />
    </div>
    <Footer />
  </div>
);

export default OneTnc;
