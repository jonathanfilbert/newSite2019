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
          </div>
          <div className="separator" />
          <div className="footerText">c/o Jonathan Filbert 2019</div>
        </div>
      </FooterContainer>
    );
  }
}

export default Footer;
