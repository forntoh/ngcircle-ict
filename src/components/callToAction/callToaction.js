import React from "react";
import PropTypes from "prop-types";
import "./callToAction.css";

import { Button } from "../button/button";

export const CallToAction = ({ label, description, backgroundColor, ...props }) => (
  <section>
    <div className="cta-wrapper">
      <div className="desc">{description}</div>
      <Button label={label} backgroundColor={backgroundColor} />
    </div>
  </section>
);

CallToAction.propTypes = {
  /**
   * Action contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Section description
   */
  description: PropTypes.string.isRequired,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

CallToAction.defaultProps = {
  label: "LOREM IPSUM",
  description: "LOREM IPSUM",
  backgroundColor: null,
  onClick: undefined,
};
