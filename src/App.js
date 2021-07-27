import React from "react";
import { HashRouter } from "react-router-dom";

import "./App.css";

import history from "./services/history";
import Routes from "./routes";

import { Language } from "./components/language/language";

function App() {
  return (
    <HashRouter history={history}>
      <Routes />
      <Language />
    </HashRouter>
  );
}

export default App;
