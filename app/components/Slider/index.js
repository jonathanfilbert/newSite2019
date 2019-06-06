/**
 *
 * Slider
 *
 */

import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { SliderContainer } from './style';
import axios from 'axios';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      porto: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://dementorjofil.herokuapp.com/get-porto-details/')
      .then(response => {
        console.log(response['data']);
      });
  }

  render() {
    return (
      <SliderContainer>
        <div>
          <h1>HEllo World</h1>
        </div>
      </SliderContainer>
    );
  }
}

Slider.propTypes = {};

export default Slider;
