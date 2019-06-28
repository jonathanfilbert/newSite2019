/* eslint-disable react/prefer-stateless-function */
/**
 *
 * NavbarLink
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { NavbarLinkContainer } from './style';

class NavbarLink extends React.Component {
  render() {
    const { text, link, tipe, href } = this.props;
    return href ? (
      <NavbarLinkContainer>
        <a href={link} target="_blank" className={tipe}>
          {text}
        </a>
      </NavbarLinkContainer>
    ) : (
      <NavbarLinkContainer>
        <Link to={link} className={tipe}>
          {text}
        </Link>
      </NavbarLinkContainer>
    );
  }
}

NavbarLink.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tipe: PropTypes.string.isRequired,
  href: PropTypes.bool,
};

export default NavbarLink;
