import React from "react";
import { Switch, Route } from "react-router-dom";

import Index from "../pages/home";
import Innovationen from "../pages/inovationen";
import Forderungen from "../pages/forderungen";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/innovationen" component={Innovationen} />
      <Route path="/forderungen" component={Forderungen} />
    </Switch>
  );
}
