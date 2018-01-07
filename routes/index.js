const express = require('express');
const router = express.Router();

const game = require('../middlewares/game')();

router.get('/',(req, res) => {
  res.send('Where is Nessie?¸.·´¯`·.´¯`·.¸¸.·´¯`·.¸><(((º> ');
});
router.get('/api/games/play',(req, res) => {
  game.play(req, res);
});
module.exports = router;
