//assertArraysEqual
const assertArraysEqual = require('./assertArraysEqual');

//eqArrays
const eqArrays = require ('./eqArrays');

// map

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map(["one", "two", "three"], word => word[0]), ["o", "t", "t"]); // => true

