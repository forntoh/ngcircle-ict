import React from "react";

import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { CallToAction } from "../components/callToAction/callToaction";

import netzwerk from "../assets/images/netzwerk.jpg";
import { NetworkItem } from "../components/networkItem/networkItem";

import "./netzwerk.scss";

export const Netzwerk = () => (
  <div>
    <Header />
    <CallToAction description="NETZWERK" />
    <div
      className="primary-image"
      style={{ backgroundImage: `url(${netzwerk})` }}
    >
      <div style={{ margin: "300px 0" }} />
    </div>
    <div className="content-wrapper">
      <p>&emsp;</p>
      <h2>NETZWERK</h2>
      <p>
        Durch unsere langjährige Erfahrung im Bereich der technischen
        Entwicklung und Problemanalyse bietet die NgC GmbH innovative,
        projektspezifische Lösungsansätze und Umsetzungspläne in
        unterschiedlichen Themenfeldern an.
      </p>
      <p>
        Nur durch Transparenz und zwischenmenschliche Kommunikation können
        Visionen und Ideen erkannt und umgesetzt werden. Diese Bestandteile sind
        aus Sicht der NgC die Basis einer strategisch wertschöpfenden
        Zusammenarbeit. Lernen Sie diese neue Art der Kommunikation gemeinsam
        mit uns kennen!
      </p>
      <p>
        Zusammen mit unseren Kooperationspartnern in Deutschland und Kamerun
        bilden wir für Sie eine starke Allianz.
      </p>
      <p>
        Unsere partnerschaftliche Vernetzung spielt eine wichtige Rolle in der
        Weiterentwicklung unseres Unternehmens. So ergibt sich die Chance
        unterschiedliche Qualifikationen und Kompetenzen miteinander zu
        verbinden und gemeinsam noch erfolgreicher zu sein - für unsere Kunden.
      </p>
      <p>
        Unsere Leistung überzeugte andere Unternehmen – wir überzeugen auch Sie.
      </p>
      <p>&emsp;</p>
      <h2>NETZWERK</h2>
      <p>
        Mit unserer Kompetenzvielfalt und Kreativität erobern wir uns eine
        Alleinstellung auf dem Markt. Wir setzten auf langzeitstabile Qualität
        mit modularer Gestaltung der Auftragsabwicklung. Durch
        Netzwerkstrategien und Kooperationen realisieren wir Ihr Anliegen mit
        unseren Synergien für die erfolgreiche Umsetzung Ihrer
        Kundenanforderung!
      </p>
      <p>&emsp;</p>
    </div>
    <div className="network-items">
      <NetworkItem
        logo="/assets/images/1tnc.svg"
        title="1TNC GmbH – Diagnostikverfahren der Zukunft im Bereich Automotive"
        description={[
          "Als Pioniere der Systemdiagnostik, mit Fokus in den Produktbereichen der Elektrik und Elektronik, arbeitet die 1TNC mit einem internationalen Ingenieurteam für innovative Systemlösungen.",
          'Die "Systemdiagnostik" ist ein Kunstwort aus der Firmengründung und beschreibt die Entwicklung von Methodiken, Prozesse, Daten und Tools, die zur besseren Diagnoseeffizienz eines Systems im gesamten Entwicklungsprozess und darüber hinaus integriert bzw. angewendet werden.',
          "Hier geht es zu der Internetseite der 1TNC GmbH.",
        ]}
      />
      <NetworkItem
        logo="/assets/images/KTA.jpg"
        title="Kamany Talent Akademy – Immer eine geniale Idee!"
        description={[
          "Die Kamany Talent Akademie ist eine deutsche Initiative und hat sich das Ziel gesetzt, kamerunische Talente im Bereich der IKT in ihren Kompetenzen zu (be)stärken sowie zu fördern. Es steht im Vordergrund, die Bewerber mit ihren Ideen voranzutreiben und vorhandene Fähigkeiten auszubauen.",
          "Im Verlauf dieses Prozesses werden die Bewerber durch einen Assessment Center unterstützt. Nachdem eine erfolgreiche Kompetenzermittlung stattgefunden hat, werden die Bewerber durch thematische Seminare im Bereich des Managements oder neuer Technologien weiterqualifiziert. Auch werden dazu Soft-Skills Trainings angeboten um die Sozialkompetenzen der Bewerber auszubauen.",
          "Hier geht es zur Internetseite der Kamany Talent Akademie.",
        ]}
      />
      <NetworkItem
        logo="/assets/images/Synostik.png"
        title="Synostik GmbH – Synergiebildung und Wissensaustausch"
        description={[
          "Die NgC GmbH hat sich ein stabiles Netzwerk aufgebaut um Synergien optimal zu nutzen und ganz gezielt auf Ihre Anforderung einzugehen.",
          "So ist es uns möglich ein individuelles und bestmögliches Ergebnis-Gesamtpaket für Sie zu erzielen.",
          "Hier geht es zur Internetseite der Synostik GmbH.",
        ]}
      />
      <NetworkItem
        logo="/assets/images/TimSchneiderEngeering_Logo_TSE.png"
        title="Tim Schneider Engineering UG – Forschung"
        description={[
          "Die Freude an guten Lösungen für technische Probleme ist nicht nur ein Antrieb, sondern eine Passion, die keine Eitelkeit kennt.",
          "Von der Analysierung neuer Trends bis hin zu Machbarkeitsstudien auf Systemebene für Test - und Diagnosesysteme - wir entwickeln Lösungen und für Ihr Problem und passen Ihre Probleme nicht an unsere Produkte an! Basierend auf den Erkenntnissen der Forschung entwickeln wir Prototypen und Kleinserien um Ihre Probleme zu lösen.",
          "Hier geht es zur Internetseite der Tim Schneider Engineering UG.",
        ]}
      />
    </div>
    <Footer />
  </div>
);

export default Netzwerk;
