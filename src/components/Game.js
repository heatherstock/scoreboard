import React, { Component } from 'react';
import Player from './Player';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      gameScore1: 0,
      gameScore2: 0
    };
  }

  render() {
    return (
      <div>
        <h2>Game</h2>
        <Player name={1} gameScore={this.state.gameScore1}/>
        <Player name={2} gameScore={this.state.gameScore2}/>
      </div>
    );
  };
}

export default Game;
