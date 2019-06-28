/**
 *
 * Footer
 *
 */

import React from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
  faDribbble,
  faMedium,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import { toggleTheme } from '../../actions/themeAction';
import { FooterContainer } from './style';

const ToggleStyle = styled.div``;

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState(prevstate => ({
      ...prevstate,
      darkMode: !prevstate.darkMode,
    }));
    this.props.toggleTheme();
  }

  render() {
    return (
      <FooterContainer>
        <div className="footerWrapper">
          <div className="socialWrapper">
            <a href="https://twitter.com/jonathanfilbert" target="_blank">
              <FontAwesomeIcon
                id="twitter"
                className="brandIcons"
                icon={faTwitter}
              />
            </a>
            <a href="https://github.com/jonathanfilbert" target="_blank">
              <FontAwesomeIcon
                id="github"
                className="brandIcons"
                icon={faGithub}
              />
            </a>
            <a
              href="https://www.instagram.com/jonathanfilbertt/"
              target="_blank"
            >
              <FontAwesomeIcon
                id="ig"
                className="brandIcons"
                icon={faInstagram}
              />
            </a>
            <a href="https://dribbble.com/Jonathanfilbert" target="_blank">
              <FontAwesomeIcon
                id="drib"
                className="brandIcons"
                icon={faDribbble}
              />
            </a>
            <a href="https://medium.com/@jonathanflisyanto" target="_blank">
              <FontAwesomeIcon
                id="med"
                className="brandIcons"
                icon={faMedium}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/jonathanflisyanto/"
              target="_blank"
            >
              <FontAwesomeIcon
                id="in"
                className="brandIcons"
                icon={faLinkedin}
              />
            </a>
          </div>
          <div className="separator" />
          <div className="separator" />
          <div className="footerText">
            <div>{this.props.darkTheme ? 'more light?' : 'go dark?'}</div>
            <div className="themeToggle">
              <label>
                <ToggleStyle>
                  <Toggle
                    onChange={this.toggleTheme}
                    className="custom-classname"
                    icons={false}
                  />
                </ToggleStyle>
              </label>
            </div>
            <div>c/o Jonathan Filbert</div>
          </div>
        </div>
      </FooterContainer>
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
    toggleTheme: () => dispatch(toggleTheme()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Footer);
