/* eslint-disable jsx-a11y/click-events-have-key-events */
/**
 *
 * Navbar
 *
 */

import React from 'react';

import NavbarLink from 'components/NavbarLink';
import Hamburger from 'components/Hamburger';
import CloseButton from 'components/CloseButton';
import { connect } from 'react-redux';
import { NavbarContainer } from './style';
import { toggleMenu } from '../../actions/toggleAction';
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
    // eslint-disable-next-line react/prop-types
    this.props.toggleMenu();
  }

  render() {
    const { toggled, isMenuShown } = this.state;
    return (
      <NavbarContainer>
        <div className={`mobileWrapper ${isMenuShown}`}>
          <div
            role="button"
            tabIndex={0}
            onClick={this.toggleMenu}
            className="exitContainer"
          >
            <CloseButton />
          </div>
          <div className="mobileMenuItems">
            <NavbarLink
              tipe="mobile"
              className="mobileNavigationItems about"
              color="leftMenu"
              text="About"
              link="/about"
            />
            <NavbarLink
              tipe="mobile"
              className="mobileNavigationItems resume"
              color="leftMenu"
              text="Resume"
              link="#"
            />
            <NavbarLink
              tipe="mobile"
              className="mobileNavigationItems projects"
              color="leftMenu"
              text="Projects"
              link="/projects"
            />
            <NavbarLink
              tipe="mobile"
              className="mobileNavigationItems blog"
              color="leftMenu"
              text="Reading List"
              link="#"
            />
            <NavbarLink
              tipe="mobile"
              className="mobileNavigationItems blog"
              color="leftMenu"
              text="Blog"
              link="/reading-list"
            />
          </div>
        </div>
        <div className={!toggled ? 'flex-wrapper' : 'hidden'}>
          <a id="logomain" href="/">
            <div>JONATHAN FILBERT</div>
          </a>
          <a id="logomain-mobile" href="/">
            <div>jfl.</div>
          </a>
          <div className="spacer" />
          <div className="navigationMenu">
            <NavbarLink
              tipe="desktop"
              className="navigationItems aboutClass"
              text="About"
              link="/about"
            />
            <NavbarLink
              tipe="desktop"
              className="navigationItems resume"
              text="Resume"
              link="#"
            />
            <NavbarLink
              tipe="desktop"
              className="navigationItems projects"
              text="Projects"
              link="/projects"
            />
            <NavbarLink
              tipe="desktop"
              className="navigationItems projects"
              text="Reading List"
              link="/reading-list"
            />
            <NavbarLink
              tipe="desktop"
              className="navigationItems blog"
              text="Blog"
              link="#"
            />
          </div>
          <div
            role="button"
            tabIndex={0}
            onClick={this.toggleMenu}
            className="burgerContainer"
          >
            <Hamburger id="hamburgerStyle" />
          </div>
        </div>
      </NavbarContainer>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleMenu: () => dispatch(toggleMenu()),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(Navbar);
