import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../AnimationFiles/PublishLoading.json';

const PublishLoading = () => {
  return (
    <Player
      src={animationData}
      background="transparent"
      speed={1}
      style={{ width: '100%', height: '100%' }}
      loop
      autoplay
    />
  );
}

export default PublishLoading;
