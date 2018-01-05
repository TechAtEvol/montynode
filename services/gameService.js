const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


const gameService = () => {
  const createLakes = (noOfLakes) => {
    const nessiesRandomLake = getRandomInt(0, noOfLakes);
    const lakes = Array(noOfLakes).fill('');
    lakes[nessiesRandomLake] = 'nessie';
    return lakes;
  }
  return {
    createLakes: createLakes
  }
};
module.exports = gameService;
