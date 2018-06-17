import React, { Component } from 'react';
import Player from './Player';
import { gamePoints } from '../logic/logic';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      gameScore1: gamePoints[0],
      gameScore2: gamePoints[0],
      test: 0
    };
  }

  click = () => {
    this.setState({ test: this.state.test + 1 });
  }

  render() {
    console.log(this.state.test)
    return (
      <div>
        <h2>Game</h2>
        <Player name={1} gameScore={this.state.gameScore1} click={this.click}/>
        <Player name={2} gameScore={this.state.gameScore2} click={this.click}/>
      </div>
    );
  };
}

export default Game;
