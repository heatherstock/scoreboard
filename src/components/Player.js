import React from 'react';

const Player = ({ name, gameScore }) => {
  return (
    <div>
      <h3>Player {name}: {gameScore}</h3>
    </div>
  )
}

export default Player;
