import React from "react";
import { Switch, Route } from "react-router-dom";

import { Button } from "../button/button";
import { Logo } from "../logo/logo";

import "./header.css";

export const Header = ({}) => (
  <header>
    <div className="wrapper">
      <Logo type="full" />
      <div style={{ flexGrow: 1 }}></div>
      <Button
        label="INNOVATIONEN"
        destination="/innovationen"
        type="secondary"
      />
      <Button label="FÖRDERUNGEN" destination="/forderungen" type="secondary" />
      <Button label="UNTERNEHMEN" destination="/unternehmen" type="secondary" />
      <Button label="LEISTUNGEN" destination="/leistungen" type="secondary" />
      <Button label="KARRIERE" destination="/karriere" type="secondary" />
      <Button label="KONTAKT" destination="/kontakt" type="secondary" />
    </div>
  </header>
);
