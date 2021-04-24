import React from "react";

import { NetworkItem } from "./networkItem";

export default {
  title: "Sections/NetworkItem",
  component: NetworkItem,
  argTypes: {
    color: { control: "color" },
  },
};

const Template = (args) => <NetworkItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  logo: "/assets/images/1tnc.svg",
  title: "1TNC GmbH – Diagnostikverfahren der Zukunft im Bereich Automotive",
  description: [
    "Als Pioniere der Systemdiagnostik, mit Fokus in den Produktbereichen der Elektrik und Elektronik, arbeitet die 1TNC mit einem internationalen Ingenieurteam für innovative Systemlösungen.",
    'Die "Systemdiagnostik" ist ein Kunstwort aus der Firmengründung und beschreibt die Entwicklung von Methodiken, Prozesse, Daten und Tools, die zur besseren Diagnoseeffizienz eines Systems im gesamten Entwicklungsprozess und darüber hinaus integriert bzw. angewendet werden.',
    "Hier geht es zu der Internetseite der 1TNC GmbH.",
  ],
  isLarge: true,
};

export const Small = Template.bind({});
Small.args = {
  logo: "/assets/images/1tnc.svg",
  title: "1TNC GmbH – Diagnostikverfahren der Zukunft im Bereich Automotive",
  description: ["Gestaltung von Benutzeroberflächen"],
  isLarge: false,
};
