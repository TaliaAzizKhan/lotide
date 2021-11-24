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


assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false