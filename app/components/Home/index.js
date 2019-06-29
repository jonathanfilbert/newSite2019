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
        <meta
          name="description"
          content="My name is Jonathan Filbert and welcome to my website. I am a passionate designer / web developer that use this website as a platform to showcase my work, and personal development. Please take a look around."
        />
        <title>Jonathan Filbert | Home</title>
      </Helmet>
      <div>
        <SliderComponent />
        <LifeUpdate />
      </div>
    </HomeContainer>
  );
}

export default Home;
