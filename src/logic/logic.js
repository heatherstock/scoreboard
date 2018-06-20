export const gamePoints = [0, 15, 30, 40, 'ADVANTAGE'] 

export const computeScore = (player, opposition) => {

  let playerIndex = gamePoints.indexOf(player);
  let oppositionIndex = gamePoints.indexOf(opposition)

  if (playerIndex === 4 && oppositionIndex === 3) {
    let result = 'WINNER';
    return result;
  }
  if (oppositionIndex === 4 && playerIndex === 3) {
    let result = gamePoints[oppositionIndex - 1];
    return result;
  }
  if (playerIndex < 3 && oppositionIndex <= 3) {
    let result = gamePoints[playerIndex + 1];
    return result;
  }
  if (playerIndex === 3 && oppositionIndex < 3) {
    let result = 'WINNER';
    return result;
  }
  if (playerIndex === 3 && oppositionIndex === 3) {
    let result = gamePoints[playerIndex + 1];
    return result;
  }
}