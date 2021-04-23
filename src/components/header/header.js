import React from "react";

import { Button } from "../button/button";
import { Logo } from "../logo/logo";

import "./header.scss";

export const Header = () => (
  <header>
    <div className="wrapper">
      <Logo type="full" />
      <div style={{ flexGrow: 1 }}></div>
      <ul className="nav-items">
        <li>
          <Button label="INNOVATIONEN" destination="/innovationen" />
        </li>
        <li>
          <Button label="FÖRDERUNGEN" destination="/forderungen" />
        </li>
        <li>
          <span>UNTERNEHMEN</span>
          <div className="overflow">
            <Button label="ÜBER UNS" destination="/uber" />
            <Button label="AUSZEICHNUNGEN" destination="/auszeichnungen" />
            <Button label="FIRMENPHILOSOPHIE" destination="/philosophie" />
            <Button label="NETZWERK" destination="/netzwerk" />
          </div>
        </li>
        <li>
          <span>UNTERNEHMEN</span>
          <div className="overflow">
            <Button label="1TNC" destination="/1tnc" />
            <Button label="NEW GLOBE CENTER" destination="/ngc" />
            <Button label="DIGITAL SOLUTIONS" destination="/digi-solutions" />
          </div>
        </li>
        <li>
          <Button label="KARRIERE" destination="/karriere" />
        </li>
        <li>
          <Button label="KONTAKT" destination="/kontakt" />
        </li>
      </ul>
    </div>
  </header>
);
