/**
 *
 * Slider
 *
 */

import React from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import { SliderContainer } from './style';
import { getImage } from '../../actions/imageAction';

class SliderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      portos: [],
      isLoading: true,
    };
    this.renderSlides = this.renderSlides.bind(this);
  }

  componentDidMount() {
    axios
      .get('https://dementorjofil.herokuapp.com/get-porto-details/')
      .then(response => {
        this.setState({
          portos: response.data,
          isLoading: false,
        });
      });
  }

  renderImage(src) {
    // TODO
    return new Promise(resolve => {
      const img = new Image();
      img.addEventListener('load', () => {
        resolve(img);
      });
      img.src = src;
    });
  }

  renderImageToDom(promises) {
    const images = [];
    promises.then(image => images.push(image));
    return images;
  }

  renderSlides() {
    return this.state.portos.map(portos => (
      <div key={portos.image} className="imageContainer">
        <a target="_blank" href={portos.url}>
          <img src={portos.image} className="slideImage" alt={portos.title} />
        </a>
        <div className="descriptionContainer">
          <div className="title">{portos.title.toUpperCase()}</div>
          <div className="description">
            <i>{portos.short_description}</i>
          </div>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <SliderContainer>
        <div className="sliderContainer">
          <Slider
            autoplay
            speed={300}
            slidesToShow={1}
            slidesToScroll={1}
            infinite
            draggable
            swipeToSlide
            swipe
          >
            {this.state.isLoading ? (
              <div className="imageContainer">
                <Skeleton duration={0.7} height={1200} />
                <div className="descriptionContainer">
                  <div className="title">
                    <Skeleton duration={0.7} width={100} />
                  </div>
                  <div className="description">
                    <Skeleton duration={0.7} width={170} />
                  </div>
                </div>
              </div>
            ) : (
              this.renderSlides()
            )}
          </Slider>
        </div>
      </SliderContainer>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getImage: () => dispatch(getImage()),
  };
}

function mapStateToProps(state) {
  return {
    portos: state.image,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SliderComponent);
