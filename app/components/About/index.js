/**
 *
 * About
 *
 */

import React from 'react';
import AboutText from 'components/AboutText';
import { AboutContainer } from './style';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <AboutContainer>
        <div>
          <AboutText />
        </div>
      </AboutContainer>
    );
  }
}

export default About;
