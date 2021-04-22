import React from "react";
import { Switch, Route } from "react-router-dom";

import Index from "../pages/home";
import Innovationen from "../pages/inovationen";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/innovationen" component={Innovationen} />
    </Switch>
  );
}
