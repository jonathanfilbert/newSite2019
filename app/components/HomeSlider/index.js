/**
 *
 * HomeSlider
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { HomeSliderContainer } from './style';
import Slider from '../Slider';

class HomeSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {} = this.props;

    return (
      <HomeSliderContainer>
        <div>
          <Slider
            options={{
              autoPlay: 4000,
              pauseAutoPlayOnHover: true,
              wrapAround: true,
              fullscreen: true,
              adaptiveHeight: true,
            }}
          />
        </div>
      </HomeSliderContainer>
    );
  }
}

HomeSlider.propTypes = {};

export default HomeSlider;
