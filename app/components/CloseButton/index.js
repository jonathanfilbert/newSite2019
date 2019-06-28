/**
 *
 * CloseButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import close from '../../images/close.svg';

class CloseButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <img style={{ width: '3em' }} alt="Close Button" src={close} />;
  }
}

CloseButton.propTypes = {};

export default CloseButton;
