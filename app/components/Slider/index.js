/**
 *
 * Slider
 *
 */

import React from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import { SliderContainer } from './style';

class SliderComponent extends React.Component {
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
        this.setState({
          porto: response.data,
        });
      });
  }

  render() {
    return (
      <SliderContainer>
        <div>
          <div className="sliderContainer">
            <Slider
              autoPlay
              centerPadding="40px"
              speed={100}
              slidesToShow={1}
              slidesToScroll={1}
              infinite
              lazyLoad="progressive"
              dots
            >
              {this.state.porto.map(portos => (
                <div key={portos.image} className="imageContainer">
                  <img alt={portos.title} src={portos.image} />
                  {portos.title}
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </SliderContainer>
    );
  }
}

export default SliderComponent;
