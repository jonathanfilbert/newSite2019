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
              autoplay
              draggable
              swipeToSlide
              speed={300}
              slidesToShow={1}
              slidesToScroll={1}
              infinite
            >
              {this.state.porto.map(portos => (
                <div key={portos.image} className="imageContainer">
                  <img
                    alt={portos.title}
                    className="slideImage"
                    src={portos.image}
                  />
                  <div className="descriptionContainer">
                    <div className="title">{portos.title.toUpperCase()}</div>
                    <div className="description">
                      <i>{portos.short_description}</i>
                    </div>
                  </div>
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
