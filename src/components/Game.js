import React, { Component } from 'react';
import Player from './Player';
import { gamePoints, computeScore } from '../logic/logic';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      gameScore1: gamePoints[0],
      gameScore2: gamePoints[0]
    };
  }

  scorePoint = (name) => {
    
    const rename = computeScore(this.state['gameScore' + name], name);
    // this.setState(result);
    console.log(rename);
    // if (this.state.gameScore1 === this.state.gameScore) {

    // }
    // let index = gamePoints.indexOf(this.state['gameScore' + name]);
    // this.setState({ ['gameScore' + name]: gamePoints[index + 1] });
  }

  render() {
    return (
      <div>
        <h2>Game</h2>
        <Player name={1} gameScore={this.state.gameScore1} click={this.scorePoint} />
        <Player name={2} gameScore={this.state.gameScore2} click={this.scorePoint} />
      </div>
    );
  };
}

export default Game;
