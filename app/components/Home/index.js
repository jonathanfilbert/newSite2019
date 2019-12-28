/**
 *
 * Home
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import SliderComponent from '../Slider';
import LifeUpdate from '../LifeUpdate';
import { HomeContainer } from './style';
function Home() {
  return (
    <HomeContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jonathan Filbert</title>
      </Helmet>
      <SliderComponent />
      <LifeUpdate />
    </HomeContainer>
  );
}

export default Home;
