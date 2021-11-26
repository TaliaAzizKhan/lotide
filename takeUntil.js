//assertArraysEqual

const assertArraysEqual = function(actual, expected) {
  
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};

//eqArrays

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

// takeUntil

const takeUntil = function(array, callback) {

    let result = []; 
    let exit = false;
    array.forEach(function(arr) {
      if (callback(arr)) {
        exit = true; 
      } else if (!exit) {
        result.push(arr);
      }
    });
    return result;
  };
  
//main

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


