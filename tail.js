const assertEqual = require('./assertEqual');

// TEST CODE
// Returns the tail of an array. ie, everything after the first element.

const tail = function(array) {
  return array.slice(1);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);

assertEqual(result.length, 2); // pass
assertEqual(result[0], "Lighthouse"); // pass
assertEqual(result[1], "Labs"); //pass
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!


// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // pass (original array should still have 3 elements!)


module.exports = tail;

