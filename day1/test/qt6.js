const test = require('node:test');
const assert = require('node:assert');
const { analyzeWord } = require('../assignment6.js');

test('analyzeWord', async (t) => {
    await t.test('Basic functionality', () => {
        assert.deepStrictEqual(analyzeWord("hello"), { length: 5, vowels: 2, consonants: 3, isLong: false });
        assert.deepStrictEqual(analyzeWord("beautiful"), { length: 9, vowels: 5, consonants: 4, isLong: true });
    });

    await t.test('Edge cases', () => {
        assert.deepStrictEqual(analyzeWord(""), { length: 0, vowels: 0, consonants: 0, isLong: false }); // Empty string
        assert.deepStrictEqual(analyzeWord("a"), { length: 1, vowels: 1, consonants: 0, isLong: false }); // Single vowel
        assert.deepStrictEqual(analyzeWord("bcdfgh"), { length: 6, vowels: 0, consonants: 6, isLong: false }); // Only consonants
    });
});
