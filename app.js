const express = require('express');
const app = express();
const router = require('./routes/index');

const port = 3000;

app.use('/',router);
const server = app.listen(port, ()=> {
  console.log('server started on localhost:' + port);
});

const publicAttributes = () => {
  return {
    app: app,
    server: server
  }
};

module.exports = publicAttributes;