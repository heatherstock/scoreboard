export const gamePoints = [0, 15, 30, 40, 'ADVANTAGE'] 

export const computeScore = (player, opposition, playerPoints, oppositionPoints) => {

  const playerIndex = gamePoints.indexOf(playerPoints);
  const oppositionIndex = gamePoints.indexOf(oppositionPoints)

  const winningScore = ((playerIndex === 4 && oppositionIndex === 3) || (playerIndex === 3 && oppositionIndex < 3))
  const resetScore = (playerPoints === 'WINNER' || playerPoints === 'LOSER')
  const loseAdvantage = (oppositionIndex === 4 && playerIndex === 3)
  const normalScore = ((playerIndex < 3 && oppositionIndex <= 3) || (playerIndex === 3 && oppositionIndex === 3))

  let result;

  if (resetScore) {
    result = { ['player' + player]: gamePoints[0], 
        ['player' + opposition]: gamePoints[0] };
    return result; 
  }
  if (winningScore) {
    result = { ['player' + player]: 'WINNER', 
        ['player' + opposition]: 'LOSER' };
    return result;
  }
  if (loseAdvantage) {
    result = { ['player' + player]: playerPoints, 
        ['player' + opposition]: gamePoints[oppositionIndex - 1] }
    return result;
  }
  if (normalScore) {
    result = { ['player' + player]: gamePoints[playerIndex + 1], 
    ['player' + opposition]: oppositionPoints };
    return result;
  }
}