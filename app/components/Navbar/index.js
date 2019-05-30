/**
 *
 * Navbar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import NavbarLink from 'components/NavbarLink';
import Hamburger from 'components/Hamburger';
import CloseButton from 'components/CloseButton';
import { NavbarContainer } from './style';

// eslint-disable-next-line react/prefer-stateless-function
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggled: false, isMenuShown: 'hidden' };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState(prevState => ({
      toggled: !prevState.toggled,
      isMenuShown: prevState.toggled ? 'hidden' : 'shown',
    }));
  }

  render() {
    const { toggled, isMenuShown } = this.state;
    return (
      <NavbarContainer>
        <div className={`mobileWrapper ${isMenuShown}`}>
          <div onClick={this.toggleMenu} className="exitContainer">
            <CloseButton />
          </div>
          <div className="mobileMenuItems">
            <NavbarLink
              tipe="mobile"
              className="mobileNavigationItems"
              color="leftMenu"
              text="About"
              link="#"
            />
            <NavbarLink
              tipe="mobile"
              className="mobileNavigationItems"
              color="leftMenu"
              text="Resume"
              link="#"
            />
            <NavbarLink
              tipe="mobile"
              className="mobileNavigationItems"
              color="leftMenu"
              text="Projects"
              link="#"
            />
            <NavbarLink
              tipe="mobile"
              className="mobileNavigationItems"
              color="leftMenu"
              text="Blog"
              link="#"
            />
          </div>
        </div>
        <div className={!toggled ? 'flex-wrapper' : 'hidden'}>
          <div id="logomain">Jonathan Filbert</div>
          <div className="spacer" />
          <div className="navigationMenu">
            <NavbarLink
              tipe="desktop"
              className="navigationItems"
              color="leftMenu"
              text="About"
              link="#"
            />
            <NavbarLink
              tipe="desktop"
              className="navigationItems"
              color="leftMenu"
              text="Resume"
              link="#"
            />
            <NavbarLink
              tipe="desktop"
              className="navigationItems"
              color="leftMenu"
              text="Projects"
              link="#"
            />
            <NavbarLink
              tipe="desktop"
              className="navigationItems"
              color="leftMenu"
              text="Blog"
              link="#"
            />
          </div>
          <div onClick={this.toggleMenu} className="burgerContainer">
            <Hamburger id="hamburgerStyle" />
          </div>
        </div>
      </NavbarContainer>
    );
  }
}

Navbar.propTypes = {};

export default Navbar;
