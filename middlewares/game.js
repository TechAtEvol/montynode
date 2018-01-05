const game = () => {
  const init = (req, res) => {
    res.send('init');
  };

  return {
    init: init
  }

};
module.exports = game;
