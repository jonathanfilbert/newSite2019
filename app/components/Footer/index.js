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
            <FontAwesomeIcon
              id="twitter"
              className="brandIcons"
              icon={faTwitter}
            />
            <FontAwesomeIcon
              id="ig"
              className="brandIcons"
              icon={faInstagram}
            />
            <FontAwesomeIcon
              id="drib"
              className="brandIcons"
              icon={faDribbble}
            />
            <FontAwesomeIcon id="med" className="brandIcons" icon={faMedium} />
          </div>
          <div className="footerText">c/o Jonathan Filbert 2019</div>
        </div>
      </FooterContainer>
    );
  }
}

export default Footer;
