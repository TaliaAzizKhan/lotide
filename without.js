// TEST/ASSERTION FUNCTIONS

//1-eqArrays
const eqArrays = require ('./eqArrays');


//2-assertArraysEqual
const assertArraysEqual = require('./assertArraysEqual');



// Without Function

const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    let addIt = true;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        addIt = false;
      }
    }
    if (addIt) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

assertArraysEqual(without([1, 2, 3], [1]), [1, 2, 3]); // => true




