import React from "react";
import { Switch, Route } from "react-router-dom";

import Index from "../pages/home";
import Innovationen from "../pages/inovationen";
import Forderungen from "../pages/forderungen";
import Karriere from "../pages/karriere";
import Kontakt from "../pages/kontakt";
import Uber from "../pages/uber";
import Auszeichnungen from "../pages/auszeichnungen";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/innovationen" component={Innovationen} />
      <Route path="/forderungen" component={Forderungen} />

      <Route path="/uber" component={Uber} />
      <Route path="/auszeichnungen" component={Auszeichnungen} />

      <Route path="/karriere" component={Karriere} />
      <Route path="/kontakt" component={Kontakt} />

      <Route component={Index} />
    </Switch>
  );
}
