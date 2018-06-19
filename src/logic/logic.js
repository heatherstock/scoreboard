export const gamePoints = [0, 15, 30, 40] 

export const computeScore = (currentScore, player1, player2) => {

  let deuce = player1 && player2 === 40;
//   let advantage = (player1 === 40 && player2 === 'ADVANTAGE') || (player2=== 40 && player1 === 'ADVANTAGE')
  let normalScore = (player1 < 40 && player2 < 40)
//   let normalWin = (player1 <= 40 && player2 < 40) || (player1 <= 40 && player2 < 40)

  let index = gamePoints.indexOf(currentScore);

  if (deuce) {
      return 'ADVANTAGE';
  }
  if (normalScore) {
    let result = gamePoints[index + 1]
    return result;
  }
  else {
    let result = gamePoints[index + 1]
    return result;
  }

}