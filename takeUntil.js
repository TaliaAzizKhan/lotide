//assertArraysEqual
const assertArraysEqual = require('./assertArraysEqual');

//eqArrays
const eqArrays = require ('./eqArrays');

// takeUntil Function

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


