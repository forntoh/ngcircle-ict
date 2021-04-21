import React, { Component } from "react";
import PropTypes from "prop-types";
import "./button.css";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ type, backgroundColor, label, ...props }) => {
  return type == "primary" ? (
    <div
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
    </div>
  ) : (
    <button
      className={[
        `ngc-button`,
        `ngc-button--secondary`,
        `ngc-button--${type}`,
      ].join(" ")}
      {...props}
    >
      {label}
    </button>
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
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  type: "primary",
  onClick: undefined,
};
