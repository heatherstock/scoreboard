const chai = require('chai'); 
const expect = chai.expect;
import {computeScore} from '../src/logic/logic';
import 'babel-polyfill';

describe('computeScore', () => {
  context('when a player scores a "normal" point (i.e. not deuce, advantage or at game point or set point)', () => {
    it('increases the score by the correct number of points', () => {
      let player = 1;
      let score = {
        game: {
          player1: 15,
          player2: 15
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

      expect(computeScore(player, score))
          .to.deep.equal({ game: { player1: 30, player2: 15 }});
    });
  });

  context('when a player scores a point at game point, but not set point', () => {
    it('announces the winner after 40 points if not on deuce, and updates set', () => {
      let player = 1;
      let score = {
        game: {
          player1: 40,
          player2: 15
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

      expect(computeScore(player, score))
        .to.deep.equal({ 
            game: { player1: 'WINNER', player2: 'LOSER' }, 
            set: { player1: 1, player2: 0 }
        });
    });

    it('increases score to advantage if on deuce', () => {
      let player = 1;
      let score = {
        game: {
          player1: 40,
          player2: 40
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

      expect(computeScore(player, score))
        .to.deep.equal({ game: { player1: 'ADVANTAGE', player2: 40 }});
    });

    it('announces the winner after winning advantage and updates set', () => {
      let player = 1;
      let score = {
        game: {
          player1: 'ADVANTAGE',
          player2: 40
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

      expect(computeScore(player, score))
        .to.deep.equal({ 
          game: { player1: 'WINNER', player2: 'LOSER' }, 
          set: { player1: 1, player2: 0 }
        });
    });

    it('decreases the oppositions score if they had advantage', () => {
      let player = 1;
      let score = {
        game: {
          player1: 40,
          player2: 'ADVANTAGE'
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

      expect(computeScore(player, score))
        .to.deep.equal({ game: { player1: 40, player2: 40 }});
    });

    it('resets the current game after the winner is announced (and awards the correct number of points)', () => {
      let player = 1;
      let score = {
        game: {
          player1: 'WINNER',
          player2: 'LOSER'
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

      expect(computeScore(player, score))
        .to.deep.equal({ game: { player1: 15, player2: 0 }});
    });
  });
  
  context('when approaching set point', () => {
    it('updates sets won and resets scores if first to reach 6 points with 2 points above opposition', () => {
      let player = 1;
      let score = {
        game: {
          player1: 40,
          player2: 15
        },
        set: {
          player1: 5,
          player2: 0
        },
        match: {
          player1: 0,
          player2: 0
        }
      };

      expect(computeScore(player, score))
        .to.deep.equal({ 
          game: { player1: 'WINNER', player2: 'LOSER' },
          set: { player1: 0, player2: 0 },
          match: { player1: 1, player2: 0 }
        });
    });

    it('updates sets won and resets scores if above 6 points with 2 points above opposition', () => {
      let player = 1;
      let score = {
        game: {
          player1: 40,
          player2: 15
        },
        set: {
          player1: 7,
          player2: 6
        },
        match: {
          player1: 0,
          player2: 0
        }
      };

      expect(computeScore(player, score))
        .to.deep.equal({ 
          game: { player1: 'WINNER', player2: 'LOSER' },
          set: { player1: 0, player2: 0 },
          match: { player1: 1, player2: 0 }
        });
    });

    it('increases games won score if less than 6 points', () => {
      let player = 1;
      let score = {
        game: {
          player1: 40,
          player2: 15
        },
        set: {
          player1: 3,
          player2: 0
        },
        match: {
          player1: 0,
          player2: 0
        }
      };

      expect(computeScore(player, score))
        .to.deep.equal({ 
          game: { player1: 'WINNER', player2: 'LOSER' },
          set: { player1: 4, player2: 0 }
        });
    });

    it('increases games won score if 6 points or above, but not 2 points above opposition', () => {
      let player = 1;
      let score = {
        game: {
          player1: 40,
          player2: 15
        },
        set: {
          player1: 6,
          player2: 6
        },
        match: {
          player1: 0,
          player2: 0
        }
      };

      expect(computeScore(player, score))
        .to.deep.equal({ 
          game: { player1: 'WINNER', player2: 'LOSER' },
          set: { player1: 7, player2: 6 }
        });
    });
  });
});