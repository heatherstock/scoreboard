import React from 'react';

const Player = ({ name, gameScore, click }) => {
  return (
    <div>
      <h3>Player {name}: {gameScore}</h3>
      <button id={name} onClick={() => click(name)}>Score</button>
    </div>
  )
}

export default Player;
