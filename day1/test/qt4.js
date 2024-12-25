const test = require('node:test');
const assert = require('node:assert');
const { createPattern } = require('../assignment4.js');

test('createPattern', async (t) => {
    await t.test('Basic functionality', () => {
        assert.strictEqual(createPattern(3), "*\n**\n***");
        assert.strictEqual(createPattern(5), "*\n**\n***\n****\n*****");
    });

    await t.test('Edge cases', () => {
        assert.strictEqual(createPattern(0), ""); // No lines
        assert.strictEqual(createPattern(1), "*"); // Single line
    });
});
