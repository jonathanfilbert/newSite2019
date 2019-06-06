/**
 *
 * Home
 *
 */

import React from 'react';
import { HomeContainer } from './style';
import SliderComponent from '../Slider';
import LifeUpdate from '../LifeUpdate';
function Home() {
  return (
    <HomeContainer>
      <div>
        <SliderComponent />
        <LifeUpdate />
      </div>
    </HomeContainer>
  );
}

export default Home;
