import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Index from "../pages/home";
import Innovationen from "../pages/inovationen";
import Forderungen from "../pages/forderungen";
import Karriere from "../pages/karriere";
import Kontakt from "../pages/kontakt";
import Uber from "../pages/uber";
import Auszeichnungen from "../pages/auszeichnungen";
import Philosophie from "../pages/philosophie";
import PageNotFound from "../pages/404";
import Netzwerk from "../pages/netzwerk";
import NgC from "../pages/ngc";
import DigitalSolutions from "../pages/digitalsolutions";
import OneTnc from "../pages/1tnc";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/innovationen" component={Innovationen} />
      <Route path="/forderungen" component={Forderungen} />

      <Route path="/uber" component={Uber} />
      <Route path="/auszeichnungen" component={Auszeichnungen} />
      <Route path="/philosophie" component={Philosophie} />
      <Route path="/netzwerk" component={Netzwerk} />

      <Route path="/1tnc" component={OneTnc} />
      <Route path="/ngc" component={NgC} />
      <Route path="/digi-solutions" component={DigitalSolutions} />

      <Route path="/karriere" component={Karriere} />
      <Route path="/kontakt" component={Kontakt} />

      <Route path="/404" component={PageNotFound} />

      <Route>
        <Redirect to="/404" />
      </Route>
    </Switch>
  );
}
