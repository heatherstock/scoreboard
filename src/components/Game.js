import React, { Component } from 'react';
import Player from './Player';
import { gamePoints, computeScore } from '../logic/logic';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      game: {
        player1: gamePoints[0],
        player2: gamePoints[0]
      },
      set: {
        player1: 0,
        player2: 0
      },
      match: {
        player1: 0,
        player2: 0
      }
    };
  }

  scorePoint = (player) => {
    const updatedPoints = computeScore(player, this.state);
    this.setState(updatedPoints);
  }  

  resetMatch = () => {
    this.setState({
      game: {
        player1: gamePoints[0],
        player2: gamePoints[0]
      },
      set: {
        player1: 0,
        player2: 0
      },
      match: {
        player1: 0,
        player2: 0
      }
    })
  }

  render() {
    return (
      <div>
        <h2>Tennis</h2>
        <Player player={1} score={this.state} click={this.scorePoint} />
        <Player player={2} score={this.state} click={this.scorePoint} />
        <button onClick={this.resetMatch}>Reset match</button>
      </div>
    );
  }; 
}

export default Game;
