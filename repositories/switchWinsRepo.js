const switchWinsRepo = () => {
  //a game with a win on switch is stored as true, a loss as false
  let games = []
  const addGameResult = (gameResult) => {
    games.push(gameResult)
  };

  const getGameResults = () => {
    return games;
  };

  return {
    addGameResult: addGameResult,
    getGameResults: getGameResults
  };
};
module.exports = switchWinsRepo;
