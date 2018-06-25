import React, { Component } from 'react';
import Player from './Player';
import { gamePoints, computeScore } from '../logic/logic';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      player1: gamePoints[0],
      player2: gamePoints[0]
    };
  }

  scorePoint = (player) => {
    const updatedPoints = computeScore(player, this.state);
    this.setState(updatedPoints);
  }  

  render() {
    return (
      <div>
        <h2>Game</h2>
        <Player player={1} gameScore={this.state.player1} click={this.scorePoint} />
        <Player player={2} gameScore={this.state.player2} click={this.scorePoint} />
      </div>
    );
  };
}

export default Game;
