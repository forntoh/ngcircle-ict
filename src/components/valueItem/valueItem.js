import React from "react";
import PropTypes from "prop-types";

import "./valueItem.scss";

export const ValueItem = ({ logo, title, description, hasIcon }) => (
  <div className={`value-item ${hasIcon ? "first" : ""}`}>
    {hasIcon ? (
      <div className="value-icon">
        <img src={process.env.PUBLIC_URL + logo} alt={title} />
      </div>
    ) : (
      ""
    )}
    <h2>{title}</h2>
    {description.map((item) => {
      return <p>{item}</p>;
    })}
  </div>
);

ValueItem.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  hasIcon: PropTypes.bool,
};

ValueItem.defaultProps = {
  logo: "/assets/images/1tnc.svg",
  title: "Lorem Ipsum",
  description: ["Lorem Ipsum dolor sit amet consectutur"],
  hasIcon: false,
};
