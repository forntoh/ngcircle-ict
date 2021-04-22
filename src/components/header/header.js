import React from "react";
import { Switch, Route } from "react-router-dom";

import { Button } from "../button/button";
import { Logo } from "../logo/logo";

import "./header.css";

import Innovationen from "../../pages/inovationen";

export const Header = ({}) => (
  <header>
    <div className="wrapper">
      <Logo type="full" />
      <div style={{ flexGrow: 1 }}></div>
      <Button label="INNOVATIONEN" type="secondary" />
      <Button label="FÖRDERUNGEN" type="secondary" />
      <Button label="UNTERNEHMEN" type="secondary" />
      <Button label="LEISTUNGEN" type="secondary" />
      <Button label="KARRIERE" type="secondary" />
      <Button label="KONTAKT" type="secondary" />
    </div>
  </header>
);
