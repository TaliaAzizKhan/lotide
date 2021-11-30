
// test/assertEqualTest.js
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#assertEqual", () => {
  it("returns 'true' for 1===1", () => {
    // assert.strictEqual(assertEqual(1,1, true), true);
    assert.strictEqual(assertEqual(1,1, true), true);
  });

  it("returns 'true' for 'bootcamp' === 'bootcamp'", () => {
    assert.strictEqual(assertEqual('bootcamp' ,'bootcamp', true), true);
  });

});

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
