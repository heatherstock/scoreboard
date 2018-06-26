export const initialState = {
  game: {
    player1: 0,
    player2: 0,
  },
  set: {
    player1: 0,
    player2: 0,
  },
  match: {
    player1: 0,
    player2: 0,
  }
};

const getNextGameState = (player, opposition, score) => {
  const currentPoints = {
    playerCurrentPoints: score.game['player' + player],
    oppositionCurrentPoints: score.game['player' + opposition],
    playerSet: score.set['player' + player],
    oppositionSet: score.set['player' + opposition],
    playerMatch: score.match['player' + player],
    oppositionMatch: score.match['player' + opposition],
  };

  const gamePoint = ((currentPoints.playerCurrentPoints === 4 && currentPoints.oppositionCurrentPoints === 3)
    || (currentPoints.playerCurrentPoints === 3 && currentPoints.oppositionCurrentPoints < 3));
  const gameWon = (currentPoints.playerCurrentPoints === 'WINNER' || currentPoints.playerCurrentPoints === 'LOSER');
  const scoreAgainstAdvantage = (currentPoints.oppositionCurrentPoints === 4 && currentPoints.playerCurrentPoints === 3);
  const normal = ((currentPoints.playerCurrentPoints < 3 && currentPoints.oppositionCurrentPoints <= 3)
    || (currentPoints.playerCurrentPoints === 3 && currentPoints.oppositionCurrentPoints === 3));
  const setPoint = (currentPoints.playerSet >= 5) && (currentPoints.playerSet >= currentPoints.oppositionSet + 1);

  if (setPoint && gamePoint) {
    return 'SET_WINNER';
  }
  if (gamePoint && !setPoint) {
    return 'GAME_WINNER';
  }
  if (gameWon) {
    return 'NEW_GAME';
  }
  if (scoreAgainstAdvantage) {
    return 'DEUCE';
  }
  if (normal) {
    return 'NORMAL';
  }
};

const stateTransitions = ({
  'SET_WINNER': (player, opposition, currentScores) => (
    {
      game: {
        ['player' + player]: 'WINNER',
        ['player' + opposition]: 'LOSER'
      },

      set: {
        ['player' + player]: 0,
        ['player' + opposition]: 0
      },

      match: {
        ['player' + player]: currentScores.match['player' + player] + 1,
        ['player' + opposition]: currentScores.match['player' + opposition]
      }
    }),
  'GAME_WINNER': (player, opposition, currentScores) => ({
    game: {
      ['player' + player]: 'WINNER',
      ['player' + opposition]: 'LOSER'
    },

    set: {
      ['player' + player]: currentScores.set['player' + player] + 1,
      ['player' + opposition]: currentScores.set['player' + opposition]
    }
  }),
  'NEW_GAME': (player, opposition, currentScores) => ({
    game: {
      ['player' + player]: 1,
      ['player' + opposition]: 0
    }
  }),
  'DEUCE': (player, opposition, currentScores) => ({
    game: {
      ['player' + player]: currentScores.game['player' + player],
      ['player' + opposition]: currentScores.game['player' + opposition] - 1
    }
  }),
  'NORMAL': (player, opposition, currentScores) => ({
    game: {
      ['player' + player]: currentScores.game['player' + player] + 1,
      ['player' + opposition]: currentScores.game['player' + opposition]
    }
  }),
});

export const computeScore = (player, currentScores) => {

  const opposition = (player === 1) ? 2 : 1;

  const nextGameState = getNextGameState(player, opposition, currentScores);

  if (!nextGameState) {
    throw new Error('Invalid game state, send in better values');
  }

  const result = stateTransitions[nextGameState](player, opposition, currentScores);
  return Object.assign({}, currentScores, result);
};