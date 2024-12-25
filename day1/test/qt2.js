const test = require('node:test');
const assert = require('node:assert');
const { calculateString } = require('../assignment2.js');

test('calculateString', async (t) => {
    await t.test('Basic functionality', () => {
        assert.strictEqual(calculateString("5 20 150 10"), 35);
        assert.strictEqual(calculateString("101 50 49 102"), 99);
        assert.strictEqual(calculateString("100 100 100"), 300);
    });

    await t.test('Edge cases', () => {
        assert.strictEqual(calculateString(""), 0); // Empty string
        assert.strictEqual(calculateString("150 200 300"), 0); // All numbers greater than 100
        assert.strictEqual(calculateString("100"), 100); // Single number equal to 100
    });
});
