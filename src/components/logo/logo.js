import React, { Component } from "react";
import PropTypes from "prop-types";
import "./logo.css";

import NgC_Logo from "../../assets/ngc-logo/logo-ngc.png";
import NgC_Logo_Neg from "../../assets/ngc-logo/logo-ngc-negative.png";
import NgC_Logo_Full from "../../assets/ngc-logo/logo-ngc-with-name.png";

export const Logo = ({ type, showBorder }) => {
  var mode =
    type == "full"
      ? NgC_Logo_Full
      : type == "negative"
      ? NgC_Logo_Neg
      : NgC_Logo;
  var isBordered = showBorder ? "ngc-logo-bordered" : "ngc-logo";
  return <img className={`ngc-logo ${isBordered}`} src={mode} alt="NgC GmbH" />;
};

Logo.propTypes = {
  /**
   * The type of the button
   */
  type: PropTypes.oneOf(["primary", "negative", "full"]),
  /**
   * Display a border around the logo
   */
  showBorder: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Logo.defaultProps = {
  type: "primary",
  showBorder: false,
  onClick: undefined,
};
