/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/**
 *
 * Navbar
 *
 */

import React from 'react';
import styled from 'styled-components';
import NavbarLink from 'components/NavbarLink';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavbarContainer } from './style';
import { toggleMenu } from '../../actions/toggleAction';

const FontAwesomeStyling = styled.div`
  font-size: 1.6em;
  color: ${props => (props.darkMode ? '#fdfdfd' : '#232323')};
`;

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
    const { darkTheme } = this.props;
    return (
      <NavbarContainer>
        <div
          className={`mobileWrapper ${isMenuShown} ${
            darkTheme ? 'dark' : 'light'
          }`}
        >
          <div
            role="button"
            tabIndex={0}
            onClick={this.toggleMenu}
            className="exitContainer"
          >
            <FontAwesomeStyling darkMode={this.props.darkTheme}>
              <FontAwesomeIcon icon={faTimes} />
            </FontAwesomeStyling>
          </div>
          <div className="mobileMenuItems">
            <div onClick={this.toggleMenu}>
              <NavbarLink
                tipe="mobile"
                className="mobileNavigationItems about"
                color="leftMenu"
                text="About"
                link="/about"
              />
            </div>
            <div onClick={this.toggleMenu}>
              <NavbarLink
                href
                tipe="mobile"
                className="mobileNavigationItems resume"
                color="leftMenu"
                text="Resume"
                link="https://drive.google.com/file/d/1ZQt5XV5j1HdK9-wCK6n8lSmOODYdQbi5/view"
              />
            </div>
            <div onClick={this.toggleMenu}>
              <NavbarLink
                tipe="mobile"
                className="mobileNavigationItems projects"
                color="leftMenu"
                text="Projects"
                link="/projects"
              />
            </div>
            <div onClick={this.toggleMenu}>
              <NavbarLink
                tipe="mobile"
                className="mobileNavigationItems blog"
                color="leftMenu"
                text="Reading List"
                link="/reading-list"
              />
            </div>
          </div>
        </div>
        <div
          className={`${!toggled ? 'flex-wrapper' : 'hidden'} ${
            darkTheme ? 'dark' : 'light'
          }`}
        >
          <Link to="/" id="logomain">
            <div>JONATHAN FILBERT</div>
          </Link>
          <Link to="/" id="logomain-mobile">
            <div>jofil.</div>
          </Link>
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
              href
              className="navigationItems resume"
              text="Resume"
              link="https://drive.google.com/file/d/1ZQt5XV5j1HdK9-wCK6n8lSmOODYdQbi5/view"
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
          </div>
          <div
            role="button"
            tabIndex={0}
            onClick={this.toggleMenu}
            className="burgerContainer"
          >
            <FontAwesomeStyling darkMode={this.props.darkTheme}>
              <FontAwesomeIcon icon={faBars} />
            </FontAwesomeStyling>
          </div>
        </div>
      </NavbarContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    darkTheme: state.themeToggler.darkMode,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleMenu: () => dispatch(toggleMenu()),
  };
}

Navbar.propTypes = {
  darkTheme: PropTypes.any,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);
