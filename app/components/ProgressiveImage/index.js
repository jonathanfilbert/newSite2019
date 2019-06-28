import React from 'react';
import PropTypes from 'prop-types';

class ProgressiveImage extends React.Component {
  state = {
    currentImage: this.props.preview,
    loading: true,
  };

  componentDidMount() {
    this.fetchImage(this.props.image);
  }

  componentWillUnmount() {
    if (this.loadingImage) {
      this.loadingImage.onload = null;
    }
  }

  fetchImage(src) {
    const image = new Image();
    image.onload = () =>
      this.setState({
        currentImage: this.loadingImage.src,
        loading: false,
      });
    image.src = src;
    this.loadingImage = image;
  }

  style(loading) {
    return {
      transition: '0.5s filter linear',
      filter: `${loading ? 'grayscale(0.5) blur(100px)' : ''}`,
    };
  }

  render() {
    const { currentImage } = this.state;
    const { alt } = this.props;
    const { cName } = this.props;

    return <img className={cName} src={currentImage} alt={alt} />;
  }
}

ProgressiveImage.propTypes = {
  currentImage: PropTypes.string,
  loading: PropTypes.bool,
  image: PropTypes.string,
  alt: PropTypes.string,
  preview: PropTypes.string,
  cName: PropTypes.string,
};

export default ProgressiveImage;
