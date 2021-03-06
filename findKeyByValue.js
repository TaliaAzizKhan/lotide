
// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');


// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);


const findKeyByValue = function(object, stringToFind) {
  for (let key in object) {
    if (object[key] === stringToFind) {
      return key;
    }
  }
  return undefined;
};


const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);