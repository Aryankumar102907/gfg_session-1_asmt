const test = require('node:test');
const assert = require('node:assert');
const { transformArray } = require('../assignment1.js');

test('transformArray', async (t) => {
    assert.deepStrictEqual(transformArray([1, 2, 3, 4]), [3, 4, 9, 8]);
    assert.deepStrictEqual(transformArray([5, 6]), [15, 12]);
    assert.deepStrictEqual(transformArray([]), []);
});