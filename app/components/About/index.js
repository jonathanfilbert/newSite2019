/**
 *
 * About
 *
 */

import React from 'react';
import AboutText from 'components/AboutText';
import { Helmet } from 'react-helmet';
import { AboutContainer } from './style';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <AboutContainer>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Jonathan Filbert | About</title>
          <meta
            name="description"
            content="A brief description regarding Jonatan Filbert and his passion in the industry of technology."
          />
        </Helmet>
        <div>
          <AboutText />
        </div>
      </AboutContainer>
    );
  }
}

export default About;
