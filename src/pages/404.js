import React from "react";

import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";

export const PageNotFound = () => (
  <div>
    <Header isExpanded={ false }/>
    <br />
    <br />
    <br />
    <h1 style={{ textAlign: "center" }}>404 Page not found</h1>
    <br />
    <br />
    <br />
    <br />
    <Footer />
  </div>
);

export default PageNotFound;
