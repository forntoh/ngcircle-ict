import React from "react";

import { ValueItem } from "./valueItem";

export default {
  title: "Sections/ValueItem",
  component: ValueItem,
};

const Template = (args) => <ValueItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "1TNC GmbH – Diagnostikverfahren der Zukunft im Bereich Automotive",
  description: [
    "Als Pioniere der Systemdiagnostik, mit Fokus in den Produktbereichen der Elektrik und Elektronik, arbeitet die 1TNC mit einem internationalen Ingenieurteam für innovative Systemlösungen.",
    'Die "Systemdiagnostik" ist ein Kunstwort aus der Firmengründung und beschreibt die Entwicklung von Methodiken, Prozesse, Daten und Tools, die zur besseren Diagnoseeffizienz eines Systems im gesamten Entwicklungsprozess und darüber hinaus integriert bzw. angewendet werden.',
    "Hier geht es zu der Internetseite der 1TNC GmbH.",
  ],
  hasIcon: false,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  logo: "/assets/images/1tnc.svg",
  title: "ODX",
  description: ["Gestaltung von Benutzeroberflächen"],
  hasIcon: true,
};
