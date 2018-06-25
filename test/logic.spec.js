const chai = require('chai'); 
const expect = chai.expect;
import {computeScore} from '../src/logic/logic';
import 'babel-polyfill';

describe('computeScore', () => {
  context('current game score 15 all', () => {
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

  context('current game score 40 - 15. Not set point.', () => {
    it('announces the winner and updates set', () => {
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
  });

  context('current game score deuce. Not set point.', () => {
    it('increases score to advantage', () => {
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

  context('current game score player advantage. Not set point.', () => {
    it('announces the winner and updates set', () => {
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
  });

  context('current game score opposition advantage. Not set point.', () => {
    it('decreases the oppositions score (score will be deuce)', () => {
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
  });

  context('currently displaying winner and loser of game', () => {
    it('resets the current game and awards the correct number of points', () => {
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
  
  context('current game score 40 - 15. Set score 5 - 0 (i.e. game point and set point)', () => {
    it('updates sets won and resets scores', () => {
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
  });

  context('current game score 40 - 15. Set score 7 - 6 (i.e. game point and set point)', () => {
    it('updates sets won and resets scores', () => {
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
  });

  context('current game score 40 - 15. Set score 3 - 0 (i.e. game point but not set point)', () => {
    it('increases games won by 1', () => {
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
  });

  context('current game score 40 - 15. Set score 6 - 6 (i.e. game point but not set point)', () => {
    it('increases games won by 1', () => {
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
});