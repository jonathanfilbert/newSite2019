/**
 *
 * Hamburger
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Hamburg from '../../images/hamburger.svg';

const HamburgerStyling = styled.div`
  .white {
    color: #fdfdfd;
  }
  .black {
    color: #232323;
  }
`;

// eslint-disable-next-line react/prefer-stateless-function
class Hamburger extends React.Component {
  render() {
    return (
      <a>
        <HamburgerStyling>
          <img
            src={Hamburg}
            style={{ color: 'blue' }}
            alt="Hamburger Menu"
            className={this.props.darkMode ? 'white' : 'black'}
          />
        </HamburgerStyling>
      </a>
    );
  }
}

Hamburger.propTypes = {};

export default Hamburger;
