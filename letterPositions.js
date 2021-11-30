
const assertArraysEqual = require('./assertArraysEqual');

const eqArrays = function(arr1, arr2) {
  let result = true;
  if (arr1.length === arr2.length) {
      
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        result = false;
      }
    }
  } else {
    result = false;
  }
  return result;
};



//Code:


const letterPositions = function(sentence) {
  let withoutSpace = sentence.replace(/\s/g, '');


  let result = {};

  for (let i = 0; i < withoutSpace.length; i++) {
    let char = withoutSpace[i];
    if (result[char]) {
      result[char].push(i);
    } else {
      result[char] = [i];
    }
  }
  return result;
};


const positions = letterPositions("Ta li a");
console.log(positions);

assertArraysEqual(positions, {T: [ 0 ], a: [ 1, 4 ], l: [ 2 ], i: [ 3 ]}); // => passed













