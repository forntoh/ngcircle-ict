import React from "react";
import PropTypes from "prop-types";

import { useLocation } from "react-router-dom";

import "./button.css";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ type, backgroundColor, label, destination, ...props }) => {
  const location = useLocation();
  var selected = destination === location.pathname ? "selected" : ""
  return type === "primary" ? (
    <a
      href={destination}
      style={backgroundColor && { backgroundColor }}
      className={["ngc-button", "ngc-button--primary"].join(" ")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="51"
        height="32.828"
        viewBox="0 0 51 32.828"
      >
        <g>
          <path
            d="M7.5,18h49"
            transform="translate(-7.5 -3)"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            d="M18,7.5l15,15-15,15"
            transform="translate(16 -7.5)"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </g>
      </svg>
      <p>{label}</p>
    </a>
  ) : (
    <a
      href={destination}
      className={[
        `ngc-button`,
        `ngc-button--secondary`,
        `ngc-button--${type}`,
        selected,
      ].join(" ")}
      {...props}
    >
      {label}
    </a>
  );
};

Button.propTypes = {
  /**
   * The type of the button
   */
  type: PropTypes.oneOf(["primary", "secondary", "secondary-dark"]),
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Destination route
   */
  destination: PropTypes.string,
};

Button.defaultProps = {
  backgroundColor: null,
  type: "secondary",
  destination: "#",
};
