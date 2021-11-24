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






const assertArraysEqual = function(array1, array2) {
  
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion passed, Both Arrays are EQUAL: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed, Both Arrays are NOT-EQUAL: ${array1} !== ${array2}`);
  }
};


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


assertArraysEqual(without([1, 2, 3], [1]), [1, 2, 3]); // => true




