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
    const lakes = Array(noOfLakes).fill(createLake(false, false, false));
    lakes[nessiesRandomLake] = createLake(false, false, true);
    return lakes;
  };

  const firstSelectReturnesAnUnselectedLakeWithoutNessiePresentedAsSearched = (lakes, selectedLake) => {
    lakes[selectedLake].isSelected= true;
    lakes.map(lake => {
      const noOfLakes = lakes.size;
      let searchedLakes = 0;
      const MaxLakesToPresentAsSearched = noOfLakes - 2;
      if(!lake.isSelected && !lake.hasNessie) {
        if(searchedLakes < MaxLakesToPresentAsSearched) {
          lake.isSearched = true;
          searchedLakes = searchedLakes+1
        }
      }
    })
    return lakes;
  };

  return {
    createLake: createLake,
    createLakes: createLakes,
    firstSelectReturnesAnUnselectedLakeWithoutNessiePresentedAsSearched: firstSelectReturnesAnUnselectedLakeWithoutNessiePresentedAsSearched
  }
};
module.exports = gameService;
