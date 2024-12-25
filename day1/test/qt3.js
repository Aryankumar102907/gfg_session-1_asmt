const test = require('node:test');
const assert = require('node:assert');
const { modifyObject } = require('../assignment3.js');

test('modifyObject', async (t) => {
    await t.test('Basic functionality', () => {
        assert.deepStrictEqual(modifyObject({ a: 5, b: 15, c: 8 }), { a: 10, b: 5, c: 13 });
        assert.deepStrictEqual(modifyObject({ x: 2, y: 10, z: 25 }), { x: 7, y: 0, z: 15 });
    });

    await t.test('Edge cases', () => {
        assert.deepStrictEqual(modifyObject({}), {}); // Empty object
        assert.deepStrictEqual(modifyObject({ p: 10, q: 9 }), { p: 0, q: 14 }); // Mixed values
    });
});
