import React from 'react';

const Player = ({ player, gameScore, click }) => {
  return (
    <div>
      <h3>Player {player}: {gameScore}</h3>
      <button id={player} onClick={() => click(player)}>Score</button>
    </div>
  )
}

export default Player;
