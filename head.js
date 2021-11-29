const assertEqual = require('./assertEqual');

// TEST CODE
// Returns the head of an array.
// Returns 'undefined' for empty array

const head = function(array) {
  return array[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
