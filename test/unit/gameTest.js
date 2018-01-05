var describe = require('mocha').describe;
var it = require('mocha').it;
var chai = require('chai');
var expect = chai.expect;

describe('a Mounty Hall based Find Nessie game',() => {
  const gameService = require('../../services/gameService')();
  const numberOfLakesInGame = 3;
  describe('with lakes created', () => {
    const lakes = gameService.createLakes(numberOfLakesInGame);
    it('has the expected number of lakes', (done) => {
      expect(lakes.length).to.equal(numberOfLakesInGame);
      done();
    });
    it('has a randomly placed Nessie beneath a lake', (done) => {
      expect(lakes.includes('nessie')).to.equal(true);
      done();
    });
  });
  //it can take a selected lake and present one lake without Nessie
  //it can can present a found or not found on a lake switch for the game
  //it can store and present the result over a simulation of a given number of games
});
