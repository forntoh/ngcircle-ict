import React, { Component } from "react";
import PropTypes from "prop-types";

import { Button } from "../button/button";
import { Logo } from "../logo/logo";

import "./footer.css";

export const Footer = ({}) => {
  return (
    <footer>
      <div className="ngc-footer-top">
        <p>© 2021 | NgC GmbH</p>
        <p style={{ flexGrow: 1 }}></p>
        <Button label="IMPRESSUM" type="secondary-dark" />
        <p>|</p>
        <Button label="DATENSCHUTZ" type="secondary-dark" />
      </div>
      <hr />
      <div className="ngc-footer-bottom">
        <Logo type="negative" showBorder={true} />
        <p style={{ flexGrow: 0.5 }}></p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>Unsere Standorte</p>
          <p style={{ flexGrow: 1 }}></p>
          <div className="locations">
            <div>
              <b>Wolfsburg</b>
              <br />
              Wolfsacker 8
              <br />
              38444 Wolfsburg
              <br />
              T: +49 531 239 64 190
            </div>
            <div>
              <b>Ingolstadt</b>
              <br />
              Eriagstraße 46
              <br />
              85053 Ingolstadt
              <br />
              T: +49 841 967 827 60
            </div>
            <div>
              <b>Magdeburg</b>
              <br />
              Magdeburg
              <br />
              Am Krökentor 1A
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
