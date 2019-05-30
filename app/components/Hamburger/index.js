/**
 *
 * Hamburger
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Hamburg from '../../images/hamburger.svg';

// eslint-disable-next-line react/prefer-stateless-function
class Hamburger extends React.Component {
  render() {
    return (
      <a>
        <img src={Hamburg} alt="Hamburger Menu" />
      </a>
    );
  }
}

Hamburger.propTypes = {};

export default Hamburger;
