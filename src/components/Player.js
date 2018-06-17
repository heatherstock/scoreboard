import React from 'react';

const Player = ({ name, gameScore }) => {
  return (
    <h3>Player {name}: {gameScore}</h3>
  )
}

export default Player;
