export const gamePoints = [0, 15, 30, 40, 'ADVANTAGE'] 

export const computeScore = (player, score) => {

  const opposition = (player === 1) ? 2 : 1;
  
  //get current points from state passed down as argument
  const playerCurrentPoints = score.game['player' + player]
  const oppositionCurrentPoints = score.game['player' + opposition]
  
  //get index of current points from gamePoints array (above) in order to do simple calculations (below)
  const playerIndex = gamePoints.indexOf(playerCurrentPoints);
  const oppositionIndex = gamePoints.indexOf(oppositionCurrentPoints)

  //define key points in game
  const winningScore = ((playerIndex === 4 && oppositionIndex === 3) || (playerIndex === 3 && oppositionIndex < 3))
  const resetScore = (playerCurrentPoints === 'WINNER' || playerCurrentPoints === 'LOSER')
  const loseAdvantage = (oppositionIndex === 4 && playerIndex === 3)
  const normalScore = ((playerIndex < 3 && oppositionIndex <= 3) || (playerIndex === 3 && oppositionIndex === 3))

  let result;

  if (resetScore) {
    result = { ['player' + player]: gamePoints[1], 
        ['player' + opposition]: gamePoints[0] };
    return result; 
  }
  if (winningScore) {
    result = { ['player' + player]: 'WINNER', 
        ['player' + opposition]: 'LOSER' };
    return result;
  }
  if (loseAdvantage) {
    result = { ['player' + player]: playerCurrentPoints, 
        ['player' + opposition]: gamePoints[oppositionIndex - 1] }
    return result;
  }
  if (normalScore) {
    result = { ['player' + player]: gamePoints[playerIndex + 1], 
    ['player' + opposition]: oppositionCurrentPoints };
    return result;
  }
}