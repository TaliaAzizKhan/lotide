
// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

// TEST CODE: count letters function
const countLetters = function(string) {
  let result = {};
  
  for (const char of string) {
    if (result[char]) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }
  return result;
};

const counted = countLetters("LHL");
console.log(counted);

assertEqual(counted["L"], 2);
assertEqual(counted["H"], 1);


