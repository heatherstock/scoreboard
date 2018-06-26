import React, { Component } from 'react';
import Player from './Player';
import { computeScore, initialState } from '../logic/logic';

class Game extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  scorePoint = (player) => {
    const updatedPoints = computeScore(player, this.state);
    this.setState(updatedPoints);
  }  

  resetMatch = () => {
    this.setState(initialState)
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
