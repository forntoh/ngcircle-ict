import React from "react";

import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { CallToAction } from "../components/callToAction/callToaction";

import digital from "../assets/images/digital_solutions.jpg";
import new_globe from "../assets/images/logos/digi-solutions.svg";
import { NetworkItem } from "../components/networkItem/networkItem";

import "./digitalsolutions.scss";

let primaryColor = "#0080C9";
let secondaryColor = "#CE3334";

export const DigitalSolutions = () => (
  <div>
    <Header />
    <CallToAction description="DIGITAL" backgroundColor={primaryColor} />
    <div
      className="primary-image"
      style={{ backgroundImage: `url(${digital})` }}
    >
      <div style={{ flex: 0.65 }}></div>
      <img
        src={new_globe}
        style={{ marginBottom: "110px", marginTop: "360px" }}
        alt="Innovationen"
      />
      <div style={{ flex: 2 }}></div>
    </div>
    <div className="content-wrapper">
      <h2>DIGITAL SOLUTIONS</h2>
      <p>
        Mit unserer Digitalagentur Digital Solutions erstellen wir Euch alles,
        was ihr für Eure digitale Kommunikation braucht. Dabei machen wir vor
        nichts Halt: Für Eure perfekte Kundenkommunikation konzipieren, designen
        und programmieren wir klassische Webseiten, Online Shops oder Apps. Aber
        auch die traditionellen Medien und grundlegender Firmenaufbau kommen bei
        uns nicht zu kurz: Gemeinsam arbeiten wir mit Euch an Eurem Corporate
        Design, erstellen Euch euer eigenes Logo oder bereiten euere
        Firmenausstattung vor.
      </p>
      <p>
        Als innovationsstarkes Unternehmen bleiben wir immer am Puls der Zeit.
        Und damit das so bleibt, steht für uns Nachhaltigkeit im Fokus.
        Nachhaltig unternehmerisch handeln heißt für uns Innovationsprojekte,
        die sich auf dem Markt behaupten können und Mitarbeiter, die sich
        konstant anhand ihrer Ziele weiterbilden. Dadurch schaffen wir
        Ressourcen, mit denen wir uns langfristig am Markt behaupten können.
      </p>
      <br />
      <h3>Unsere Prozesse für die Webentwicklung:</h3>
      <div className="process-items">
        <NetworkItem
          logo="/assets/images/icons/ui-design.svg"
          title="UI-Design"
          isLarge={false}
          description={["Gestaltung von Benutzeroberflächen"]}
          color={primaryColor}
        />
        <NetworkItem
          logo="/assets/images/icons/frontend.svg"
          title="Webentwicklung"
          isLarge={false}
          description={["Programmierung moderner Websites "]}
          color={primaryColor}
        />
        <NetworkItem
          logo="/assets/images/icons/qualitaet.svg"
          title="Qualitätssicherung"
          isLarge={false}
          description={[
            "Optimierung der User-Experience auf allen gängigen Geräten",
          ]}
          color={primaryColor}
        />
      </div>
      <br />
      <h3>Unsere Prozesse zur Appentwicklung:</h3>
      <div className="process-items">
        <NetworkItem
          logo="/assets/images/icons/android.svg"
          title="Android-Entwicklung"
          isLarge={false}
          description={["Entwicklung nativer Android Apps"]}
          color={secondaryColor}
        />
        <NetworkItem
          logo="/assets/images/icons/iOS.png"
          title="iOS-Entwicklung"
          isLarge={false}
          description={["Programmierung von iOS-Apps für iPhones und iPads"]}
          color={secondaryColor}
        />
        <NetworkItem
          logo="/assets/images/icons/web.svg"
          title="Webbasierte Apps"
          isLarge={false}
          description={["Entwicklung moderner Apps auf Browser-Basis"]}
          color={secondaryColor}
        />
      </div>
    </div>
    <Footer />
  </div>
);

export default DigitalSolutions;
