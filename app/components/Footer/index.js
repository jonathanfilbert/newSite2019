/**
 *
 * Footer
 *
 */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
  faDribbble,
  faMedium,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FooterContainer } from './style';
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
          <div className="footerText">
            <div>c/o Jonathan Filbert</div>
            <div>A WEBSITE</div>
          </div>
        </div>
      </FooterContainer>
    );
  }
}

export default Footer;
