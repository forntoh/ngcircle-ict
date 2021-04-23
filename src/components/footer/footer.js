import React from "react";

import { Button } from "../button/button";
import { Logo } from "../logo/logo";

import "./footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="ngc-footer-top">
        <p>© {new Date().getFullYear()} | NgC GmbH</p>
        <p style={{ flexGrow: 1 }}></p>
        <Button label="IMPRESSUM" type="secondary-dark" />
        <div>|</div>
        <Button label="DATENSCHUTZ" type="secondary-dark" />
      </div>
      <hr />
      <div className="ngc-footer-bottom">
        <div>
          <Logo type="negative" showBorder={true} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <p>Unsere Standorte</p>
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
        <div></div>
      </div>
    </footer>
  );
};
