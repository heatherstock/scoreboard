export const gamePoints = [0, 15, 30, 40, 'ADVANTAGE'] 

export const computeScore = (score, currentPlayer, opposition) => {

  const currentPlayerScoreIndex = currentPlayer - 1;
  const oppositionScoreIndex = opposition - 1;

  const actualPlayerScore = score[currentPlayerScoreIndex];
  const actualOppositionScore = score[oppositionScoreIndex]

  const currentPlayerPointIndex = gamePoints.indexOf(actualPlayerScore);
  const oppositionPointIndex = gamePoints.indexOf(actualOppositionScore);

  if (currentPlayerPointIndex === 4 && oppositionPointIndex === 3) {
    actualPlayerScore = 'WINNER';
    actualOppositionScore = 'LOSER';
    return ;
  }
  // if (oppositionPointIndex === 4 && currentPlayerPointIndex === 3) {
  //   let result = gamePoints[oppositionPointIndex - 1];
  //   return result;
  // }
  // if (currentPlayerPointIndex < 3 && oppositionPointIndex <= 3) {
  //   let result = gamePoints[currentPlayerPointIndex + 1];
  //   return result;
  // }
  // if (currentPlayerPointIndex === 3 && oppositionPointIndex < 3) {
  //   let result = 'WINNER';
  //   return result;
  // }
  // if (currentPlayerPointIndex === 3 && oppositionPointIndex === 3) {
  //   let result = gamePoints[currentPlayerPointIndex + 1];
  //   return result;
  }
}