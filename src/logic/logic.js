export const gamePoints = [0, 15, 30, 40, 'ADVANTAGE'] 

export const computeScore = (player, score) => {

  const opposition = (player === 1) ? 2 : 1;
  
  //get current points from state passed down as argument
  const playerCurrentPoints = score.game['player' + player];
  const oppositionCurrentPoints = score.game['player' + opposition];

  const playerSet = score.set['player' + player];
  const oppositionSet = score.set['player' + opposition];

  const playerMatch = score.match['player' + player];
  const oppositionMatch = score.match['player' + opposition];
  
  //get index of current points from gamePoints array (above) in order to do simple calculations (below)
  const playerIndex = gamePoints.indexOf(playerCurrentPoints);
  const oppositionIndex = gamePoints.indexOf(oppositionCurrentPoints);

  //define key points in game
  const gamePoint = ((playerIndex === 4 && oppositionIndex === 3) || (playerIndex === 3 && oppositionIndex < 3));
  const gameWon = (playerCurrentPoints === 'WINNER' || playerCurrentPoints === 'LOSER');
  const scoreAgainstAdvantage = (oppositionIndex === 4 && playerIndex === 3);
  const normal = ((playerIndex < 3 && oppositionIndex <= 3) || (playerIndex === 3 && oppositionIndex === 3));
  const setPoint = (playerSet >= 5) && (playerSet >= oppositionSet + 1);

  let result;

  switch (true) {
    case (setPoint && gamePoint):
      result = { 
        game: { ['player' + player]: 'WINNER', 
        ['player' + opposition]: 'LOSER' },

        set: { ['player' + player]: 0,
        ['player' + opposition]: 0  },

        match: { ['player' + player]: playerMatch + 1, 
        ['player' + opposition]: oppositionMatch }
      };
      return result;

    case (gamePoint && !setPoint):
      result = { 
        game: { ['player' + player]: 'WINNER', 
        ['player' + opposition]: 'LOSER' },

        set: { ['player' + player]: playerSet + 1, 
        ['player' + opposition]: oppositionSet }
      };
      return result;

    case gameWon:
      result = { 
        game: { ['player' + player]: gamePoints[1], 
        ['player' + opposition]: gamePoints[0] }
      };
      return result; 

    case scoreAgainstAdvantage:
      result = { 
        game: { ['player' + player]: playerCurrentPoints, 
        ['player' + opposition]: gamePoints[oppositionIndex - 1] }
      };
      return result;

    case normal:
      result = { 
        game: { ['player' + player]: gamePoints[playerIndex + 1], 
        ['player' + opposition]: oppositionCurrentPoints }
      };
      return result;

    default:
      console.log('hmm');
  };
};

// hello blah blah 