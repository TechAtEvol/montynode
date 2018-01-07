const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../app')().app;
const server = require('../../app')().server;
const api = request(app);

let latestRound = 0;

const callback = (res, index) => {
  latestRound = res.body;
};

const anApiCall = (index) => {
  it('plays a game', (done) => {
    api
      .get('/api/games/play')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        callback(res, index);
        if (err) return done(err);
        done();
      });
  });
};

describe('a game simulation', () => {
  const runs = 1000;
  describe('with a game series simulation suite', () => {
    for(let i = 0; i < runs; i++){
      anApiCall(i);
      server.close();
    }
  });
  describe('with a report', () => {
    it('presents', (done) => {
      console.log(runs +' games played with a '+JSON.stringify(latestRound.rateForSwitch)+ ' % winning percentage for switching lake');
      done()
    })
  })

});