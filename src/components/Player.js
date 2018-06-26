import React from 'react';
export const gamePoints = [0, 15, 30, 40, 'ADVANTAGE'];

const Player = ({ player, score, click }) => {
  const gameScore = gamePoints[score.game['player' + player]];
  const setScore = score.set['player' + player];
  const matchScore = score.match['player' + player];

  return (
    <div>
      <h3>Player {player} sets won: {matchScore}</h3>

      <h3>Player {player} games won: {setScore}</h3>

      <h3>Player {player} current game: {gameScore}</h3>

      <button id={player} onClick={() => click(player)}>Score</button>
    </div>
  )
}

export default Player;
