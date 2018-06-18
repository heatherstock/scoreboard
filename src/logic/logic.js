export const gamePoints = [0, 15, 30, 40, 'ADVANTAGE'] 


export const computeScore = (gameScore) => {
  let index = gamePoints.indexOf(gameScore);
  let result = { gameScore: gamePoints[index + 1] };
    return result;
}