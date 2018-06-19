export const gamePoints = [0, 15, 30, 40, 'ADVANTAGE'] 


export const computeScore = (currentScore) => {
  let index = gamePoints.indexOf(currentScore);
  let result = gamePoints[index + 1]
    return result;
}