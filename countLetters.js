
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${actual} !== ${expected}`);
  }
  
};

// TEST CODE


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


