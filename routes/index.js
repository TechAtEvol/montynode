const express = require('express');
const router = express.Router();

const game = require('../middlewares/game')();

router.get('/',(req, res) => {
  res.send('Where is Nessie?¸.·´¯`·.´¯`·.¸¸.·´¯`·.¸><(((º> ');
});
router.get('/api/init',(req, res) => {
  game.init(req, res);
});
module.exports = router;
