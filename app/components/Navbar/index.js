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
    console.log('triggered!');
    console.log(this.state.toggled);
    if (!this.state.toggled) {
      console.log('masuk');
      this.setState(state => ({
        toggled: true,
        isMenuShown: 'shown',
      }));
    } else {
      this.setState(state => ({
        toggled: false,
        isMenuShown: 'shown',
      }));
    }
    console.log(this.state.toggled);
  }

  render() {
    const { toggled, isMenuShown } = this.state;
    return (
      <NavbarContainer>
        <div id="mobile-wrapper" className={isMenuShown}>
          <div onClick={() => this.toggleMenu()} className="exitContainer">
            <CloseButton />
          </div>
          <div className="mobileMenuItems">
            <NavbarLink
              className="mobileNavigationItems"
              color="leftMenu"
              text="About"
              link="#"
            />
            <NavbarLink
              className="mobileNavigationItems"
              color="leftMenu"
              text="Resume"
              link="#"
            />
            <NavbarLink
              className="mobileNavigationItems"
              color="leftMenu"
              text="Projects"
              link="#"
            />
            <NavbarLink
              className="mobileNavigationItems"
              color="leftMenu"
              text="Blog"
              link="#"
            />
          </div>
        </div>
        <div className="flex-wrapper">
          <NavbarLink
            id="logomain"
            color="main"
            text="Jonathan Filbert"
            link="#"
          />
          <div className="spacer" />
          <div className="navigationMenu">
            <NavbarLink
              className="navigationItems"
              color="leftMenu"
              text="About"
              link="#"
            />
            <NavbarLink
              className="navigationItems"
              color="leftMenu"
              text="Resume"
              link="#"
            />
            <NavbarLink
              className="navigationItems"
              color="leftMenu"
              text="Projects"
              link="#"
            />
            <NavbarLink
              className="navigationItems"
              color="leftMenu"
              text="Blog"
              link="#"
            />
          </div>
          <div onClick={() => this.toggleMenu()} className="burgerContainer">
            <Hamburger id="hamburgerStyle" />
          </div>
        </div>
      </NavbarContainer>
    );
  }
}

Navbar.propTypes = {};

export default Navbar;
