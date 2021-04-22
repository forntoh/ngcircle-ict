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
      <Button label="INNOVATIONEN" destination="/innovationen" />
      <Button label="FÖRDERUNGEN" destination="/forderungen" />
      <Button label="UNTERNEHMEN" destination="/unternehmen" />
      <Button label="LEISTUNGEN" destination="/leistungen" />
      <Button label="KARRIERE" destination="/karriere" />
      <Button label="KONTAKT" destination="/kontakt" />
    </div>
  </header>
);
