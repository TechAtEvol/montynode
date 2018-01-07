const gameService = require('../services/gameService')();
const game = () => {
  const play = (req, res) => {
    const result = gameService.runAGameWith3Lakes();
    res.send(result);
  };

  return {
    play: play
  }

};
module.exports = game;
