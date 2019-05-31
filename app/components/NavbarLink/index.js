/* eslint-disable react/prefer-stateless-function */
/**
 *
 * NavbarLink
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { NavbarLinkContainer } from './style';

class NavbarLink extends React.Component {
  render() {
    const { text, link, tipe } = this.props;
    return (
      <NavbarLinkContainer>
        <a className={tipe} href={link}>
          {text}
        </a>
      </NavbarLinkContainer>
    );
  }
}

NavbarLink.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tipe: PropTypes.string.isRequired,
};

export default NavbarLink;
