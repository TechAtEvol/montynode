const repo = require('../repositories/switchWinsRepo')();

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

class Lake {
  constructor(isSelected, isSearched, hasNessie) {
    this.isSelected = isSelected,
      this.isSearched = isSearched,
      this.hasNessie = hasNessie
  }
}


const gameService = () => {
  const createLake = (isSelected, isSearched, hasNessie) => {
    return new Lake(isSelected, isSearched, hasNessie);
  };

  const createLakes = (noOfLakes) => {
    const nessiesRandomLake = getRandomInt(0, noOfLakes);
    const lakes = [];
    for (let i = 0; i < noOfLakes; i++) {
      lakes.push(createLake(false, false, false))
    }
    //const lakes = Array(noOfLakes).fill(createLake(false, false, false));
    lakes[nessiesRandomLake] = createLake(false, false, true);
    return lakes;
  };

  const firstSelectReturnesAnUnselectedLakeWithoutNessiePresentedAsSearched = (lakes, selectedLake) => {
    const newLakes = lakes.slice();
    newLakes[selectedLake].isSelected = true;
    let searchedLakes = 0;
    const noOfLakes = newLakes.length;
    const MaxLakesToPresentAsSearched = noOfLakes - 2;
    let mappedLakes = newLakes.map(lake => {
      if (lake.isSelected == false && lake.hasNessie == false) {
        if (searchedLakes < MaxLakesToPresentAsSearched) {
          lake.isSearched = true;
          searchedLakes = searchedLakes + 1
        }
      }
      return lake;
    });
    return mappedLakes;
  };

  const secondSelectionWithASwitch = (lakes) => {
    const remainder = lakes
      .filter(lake =>
        !lake.isSelected)
      .filter(lake =>
        !lake.isSearched)
    if (remainder.length > 1) {
      throw new Error('bad_input');
    }
    return remainder[0].hasNessie;
  };

  const runAGameWith3Lakes = () => {
    const lakes = createLakes(3);
    const lakesFromFirstRound = firstSelectReturnesAnUnselectedLakeWithoutNessiePresentedAsSearched(lakes, 0)
    const isWinOnSwitch = secondSelectionWithASwitch(lakesFromFirstRound);
    repo.addGameResult(isWinOnSwitch);
    const total = repo.getGameResults();
    const noOfGames = total.length;
    let noOfWins = total.reduce((sum, x) => {
      if (x) {
        sum = sum + 1;
      }
        return sum;
    },0);
    const rateForSwitch = Number.parseFloat(((noOfWins / noOfGames) * 100).toPrecision(4));
    const rateForStay = 100 - rateForSwitch;

    return {
      result: isWinOnSwitch ? 'win on switch' : 'loss on switch',
      noOfGames: noOfGames,
      noOfWins: noOfWins,
      rateForSwitch: rateForSwitch,
      rateForStay: rateForStay
    }

  };

  return {
    createLake: createLake,
    createLakes: createLakes,
    firstSelectReturnesAnUnselectedLakeWithoutNessiePresentedAsSearched: firstSelectReturnesAnUnselectedLakeWithoutNessiePresentedAsSearched,
    secondSelectionWithASwitch: secondSelectionWithASwitch,
    runAGameWith3Lakes: runAGameWith3Lakes
  }
};
module.exports = gameService;
