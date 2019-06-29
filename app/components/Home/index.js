/**
 *
 * Home
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { HomeContainer } from './style';
import SliderComponent from '../Slider';
import LifeUpdate from '../LifeUpdate';
function Home() {
  return (
    <HomeContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jonathan Filbert | Home</title>
        <meta
          name="description"
          content="My showcased work and realtime life updates."
        />
      </Helmet>
      <div>
        <SliderComponent />
        <LifeUpdate />
      </div>
    </HomeContainer>
  );
}

export default Home;
