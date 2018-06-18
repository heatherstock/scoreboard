import React, { Component } from 'react';
import Player from './Player';
import { gamePoints } from '../logic/logic';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      gameScore1: gamePoints[0],
      gameScore2: gamePoints[0]
    };
  }

  update1 = () => {
    let index = gamePoints.indexOf(this.state.gameScore1);
    this.setState({ gameScore1: gamePoints[index + 1] });
  }

  update2 = () => {
    let index = gamePoints.indexOf(this.state.gameScore2);
    this.setState({ gameScore2: gamePoints[index + 1] });
  }

  render() {
    // console.log(gamePoints.indexOf(this.state.gameScore1));
    return (
      <div>
        <h2>Game</h2>
        <Player name={1} gameScore={this.state.gameScore1} click={this.update1}/>
        <Player name={2} gameScore={this.state.gameScore2} click={this.update2}/>
      </div>
    );
  };
}

export default Game;
