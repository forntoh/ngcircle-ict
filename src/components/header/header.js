import React from "react";
import PropTypes from "prop-types";

import { Button } from "../button/button";
import { Logo } from "../logo/logo";

import "./header.scss";

export class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleClick = () => {
    this.setState({ isOpen: this.state.isOpen ? false : true })
  };

  render = () => (
    <header>
      <div className={ this.props.isExpanded ? `wrapper` : `wrapper-collapsed` }>
        <Logo type="full" />
        <ul className="nav-items" style={{ display: this.state.isOpen ? `block` : `none` }}>
          <li>
            <Button label="INNOVATIONEN" destination="/innovationen" />
          </li>
          <li>
            <Button label="FÖRDERUNGEN" destination="/forderungen" />
          </li>
          <li>
            <span>UNTERNEHMEN</span>
            <div className="overflow">
              <Button label="ÜBER UNS" destination="/uber" />
              <Button label="AUSZEICHNUNGEN" destination="/auszeichnungen" />
              <Button label="FIRMENPHILOSOPHIE" destination="/philosophie" />
              <Button label="NETZWERK" destination="/netzwerk" />
            </div>
          </li>
          <li>
            <span>LEISTUNGEN</span>
            <div className="overflow">
              <Button label="1TNC" destination="/1tnc" />
              <Button label="NEW GLOBE CENTER" destination="/ngc" />
              <Button label="DIGITAL SOLUTIONS" destination="/digi-solutions" />
            </div>
          </li>
          <li>
            <Button label="KARRIERE" destination="/karriere" />
          </li>
          <li>
            <Button label="KONTAKT" destination="/kontakt" />
          </li>
        </ul>
        <span className={ this.state.isOpen ? `close` : `hamburger` } onClick={this.handleClick}></span>
      </div>
    </header>
  );
}

Header.propTypes = {
  isExpanded: PropTypes.bool,
};

Header.defaultProps = {
  isExpanded: true,
};
