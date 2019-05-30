/**
 *
 * Home
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { HomeContainer } from './style';
import Navbar from '../Navbar';

function Home() {
  return (
    <HomeContainer>
      <Navbar />
      <h1>Hello world</h1>
    </HomeContainer>
  );
}

Home.propTypes = {};

export default Home;
