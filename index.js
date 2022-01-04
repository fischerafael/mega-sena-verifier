game1 = [6, 19, 25, 30, 36, 43, 54];
game2 = [12, 15, 28, 37, 46, 47, 59];
game3 = [3, 14, 19, 27, 29, 46, 57];
game4 = [10, 13, 14, 27, 39, 42, 51];
game5 = [2, 14, 16, 18, 39, 50, 58];
game6 = [23, 25, 30, 38, 54, 57, 58];

games = [game1, game2, game3, game4, game5, game6];

result = [12, 15, 23, 32, 33, 46];

const findRightsLenPerGame = (result, game) => {
  const rightBetsArray = result.filter((number) => game.includes(number));
  const rightBetsArrayLen = rightBetsArray.length;
  return rightBetsArrayLen;
};

const findRightsPerGame = (games, result) => {
  const totalRightsArray = games.map((game) => {
    return findRightsLenPerGame(result, game);
  });

  return totalRightsArray;
};

const rightsPerGame = findRightsPerGame(games, result);

const formatedResponse = rightsPerGame.map(
  (item, index) => `Game ${index + 1}: ${item} numbers right`
);

console.log(formatedResponse);
