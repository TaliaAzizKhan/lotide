
// test/middleTest.js
const middle = require('../middle');

const assertArraysEqual = require ('../assertArraysEqual');


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
