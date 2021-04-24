import React from "react";
import PropTypes from "prop-types";

import "./networkitem.scss";

export const NetworkItem = ({ logo, title, description, isLarge, color }) => {
  var mode = isLarge ? "--large" : "--small";
  return (
    <div className={["network-item", `network-item${mode}`].join(" ")}>
      <div className="img-c" style={{ borderColor: color }}>
        <img src={process.env.PUBLIC_URL + logo} alt={title} />
      </div>
      <div className="content">
        <h3>{title}</h3>
        {description.map((item) => {
          return <p>{item}</p>;
        })}
      </div>
    </div>
  );
};

NetworkItem.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  isLarge: PropTypes.bool,
  color: PropTypes.string,
};

NetworkItem.defaultProps = {
  logo: "/assets/images/1tnc.svg",
  title: "Lorem Ipsum",
  description: ["Lorem Ipsum dolor sit amet consectutur"],
  isLarge: true,
  color: "black",
};
