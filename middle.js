
// TEST/ASSERTION FUNCTIONS

//1-eqArrays
const eqArrays = require ('./eqArrays');


//2-assertArraysEqual
const assertArraysEqual = require('./assertArraysEqual');



// MIDDLE FUNCTION

const middle = function(array) {

  let totalElements = array.length;

  if (totalElements < 3) {
    return []; //return empty array

  } else if (totalElements % 2 === 1) { // odd number of elements
    return [array[Math.floor(totalElements / 2)]];

  } else if (totalElements % 2 === 0) { // even number of elements
    return [array[Math.round(totalElements / 2) - 1], array[Math.round(totalElements / 2)]];
  }
};


assertArraysEqual(middle([1]), middle([1, 2])); // => passed
assertArraysEqual(middle([1, 2, 3]), middle([1, 2, 3, 4, 5])); // => fail
assertArraysEqual(middle([1, 2, 3, 4]), middle([1, 2, 3, 4, 5, 6])); // => fail
assertArraysEqual(middle(["1", "2", "3"]), middle(["1", "2", 3])); // => pass

module.exports = middle;
