
// test/middleTest.js

const assertArraysEqual = require ('../assertArraysEqual');
const middle = require('../middle');
const expect = require('chai').expect;



describe('#middle', () => {
  // Case 1 or 2 elements
  it("returns empty-array if input-array has 1 element",()=>{
    expect(middle([1])).to.eql([]);
  });
  it("returns empty-array if input-array has 2 elements",()=>{
    expect(middle([1, 2])).to.eql([]);
  });
  // Case odd number of elements
  it("returns correct array for arrays with odd number of elements",()=>{
    expect(middle([1, 2, 3])).to.eql([2]);
    expect(middle([1, 2, 3, 4, 5])).to.eql([3]);
  });
  // Case even number of elements
  it("returns correct array for arrays with even number of elements",()=>{
    expect(middle([1, 2, 3, 4])).to.eql([2, 3]);
    expect(middle([1, 2, 3, 4, 5, 6])).to.eql([3, 4]);
  });
});





// TEST CODE
middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]



assertArraysEqual(middle([1]), middle([1, 2])); // => passed
assertArraysEqual(middle([1, 2, 3]), middle([1, 2, 3, 4, 5])); // => fail
assertArraysEqual(middle([1, 2, 3, 4]), middle([1, 2, 3, 4, 5, 6])); // => fail
assertArraysEqual(middle(["1", "2", "3"]), middle(["1", "2", 3])); // => pass
