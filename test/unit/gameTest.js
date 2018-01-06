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
    it('has one randomly placed Nessie beneath a lake', (done) => {
      expect(lakes.filter(lake => lake.hasNessie === true).length).to.equal(1);
      done();
    });
    it('a first selection in the game presents in response an unselected, empty Lake to the gamer', (done) => {
      //given
      const createLake = gameService.createLake;
      const lakeWithNessie = createLake(false, false, true);
      const mockLakes = [
        createLake(false, false, false),
        lakeWithNessie,
        createLake(false, false, false),
      ];
      const selectedLake = 0;
      let expectedResult = mockLakes.slice();
      expectedResult[0].isSelected = true;
      expectedResult[2].isSearched = true;
      //when
      const actualResult = gameService.firstSelectReturnesAnUnselectedLakeWithoutNessiePresentedAsSearched(mockLakes, selectedLake);
      //then
      chai.expect(actualResult).to.deep.equal(expectedResult);
      done();
    });
  });
  //it can take lakes with a selected lake and present another lake without Nessie
  //it can can present a found or not found on a lake switch for the game
  //it can store and present the result over a simulation of a given number of games
});
