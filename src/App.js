import React from "react";
import { HashRouter } from "react-router-dom";

import "./App.css";

import history from "./services/history";
import Routes from "./routes";

function App() {
  return (
    <HashRouter basename="/" history={history}>
      <Routes />
    </HashRouter>
  );
}

export default App;
