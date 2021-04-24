import React from "react";
import PropTypes from "prop-types";

import "./networkitem.scss";

export const NetworkItem = ({ logo, title, description }) => (
  <div className="network-item">
    <div className="img-c">
      <img src={process.env.PUBLIC_URL + logo} alt={title} />
    </div>
    <div className="content">
      <h3>{title}</h3>
      {description.map((item) => {
        return <p>{item}</p>;
      })}
    </div>
  </div>
);

NetworkItem.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.string),
};

NetworkItem.defaultProps = {
  logo: "/assets/images/1tnc.svg",
  title: "1TNC GmbH – Diagnostikverfahren der Zukunft im Bereich Automotive",
  description: [
    "Als Pioniere der Systemdiagnostik, mit Fokus in den Produktbereichen der Elektrik und Elektronik, arbeitet die 1TNC mit einem internationalen Ingenieurteam für innovative Systemlösungen.",
    'Die "Systemdiagnostik" ist ein Kunstwort aus der Firmengründung und beschreibt die Entwicklung von Methodiken, Prozesse, Daten und Tools, die zur besseren Diagnoseeffizienz eines Systems im gesamten Entwicklungsprozess und darüber hinaus integriert bzw. angewendet werden.',
    "Hier geht es zu der Internetseite der 1TNC GmbH.",
  ],
};
