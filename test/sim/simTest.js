const expect = require('chai').expect;

const anApiCall = () => {};

describe('a game simulation', () => {
  const runs = 100;
  it('runs '+runs+' times', (done) => {
    let i=0;
    for(i; i < runs; i++){
      anApiCall();
    }
    expect(i).to.equal(runs);
    done()
  });
});