/**
 *
 * Home
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { HomeContainer } from './style';
import Navbar from '../Navbar';
import HomeSlider from '../HomeSlider';

function Home() {
  return (
    <HomeContainer>
      <Navbar className="parent" />
      <HomeSlider />
    </HomeContainer>
  );
}

Home.propTypes = {};

export default Home;
