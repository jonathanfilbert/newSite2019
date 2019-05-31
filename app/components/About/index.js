/**
 *
 * About
 *
 */

import React from 'react';
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
          <h1>About Page</h1>
        </div>
      </AboutContainer>
    );
  }
}

export default About;
