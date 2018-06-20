import React, { Component } from 'react';
import Player from './Player';
import { computeScore } from '../logic/logic';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      score: [0, 0]
    };
  }

  scorePoint = (name, opposition) => {
    const updatedScore = computeScore(this.state.score, name, opposition)
    // this.setState({ score: updatedScore })
    console.log(updatedScore)
  }

  render() {
    return (
      <div>
        <h2>Game</h2>
        <Player name={1} opposition={2} gameScore={this.state.score[0]} click={this.scorePoint} />
        <Player name={2} opposition={1} gameScore={this.state.score[1]} click={this.scorePoint} />
      </div>
    );
  };
}

export default Game;
