/* eslint-disable react/prop-types */
/**
 *
 * Hamburger
 *
 */

import React from 'react';
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
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
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
