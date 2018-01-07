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
    it('has Nessie randomly placed beneath a lake', (done) => {
      expect(lakes.filter(lake => lake.hasNessie === true).length).to.equal(1);
      done();
    });
  });
  describe('on a first selection', () => {
    it('presents in response an unselected, empty Lake to the gamer', (done) => {
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

  describe('on a second selection with a switch of choice', () => {
    it('presents a found or not found for Nessie!', (done) => {
      const createLake = gameService.createLake;
      const lakeWithNessie = createLake(false, false, true);
      const lakesWithAFirstSelection = [
        createLake(true, false, false),
        lakeWithNessie,
        createLake(false, true, false)
      ];
      const actualResult = gameService.secondSelectionWithASwitch(lakesWithAFirstSelection)
      expect(actualResult).to.be.true;
      done()
    })
  })

  describe('on a simulation over a number of games', () => {
    it('is possible to store the result for a game round as a boolean', (done) => {
      const switchWinsRepo = require('../../repositories/switchWinsRepo')();
      switchWinsRepo.addGameResult(true);
      switchWinsRepo.addGameResult(false);
      expect(switchWinsRepo.getGameResults()).to.deep.equal([true, false]);
      done();
    })
    //presents the stored statistics for winning on a switch
  })
});
