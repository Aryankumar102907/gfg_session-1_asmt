const test = require('node:test');
const assert = require('node:assert');
const { filterAndMap } = require('../assignment5.js');

test('filterAndMap', async (t) => {
    await t.test('Basic functionality', () => {
        assert.deepStrictEqual(
            filterAndMap([{ name: "John", age: 17 }, { name: "Jane", age: 20 }]),
            [{ name: "Jane", age: 20, isAdult: true }]
        );
        assert.deepStrictEqual(
            filterAndMap([{ name: "Alice", age: 18 }, { name: "Bob", age: 25 }]),
            [{ name: "Alice", age: 18, isAdult: true }, { name: "Bob", age: 25, isAdult: true }]
        );
    });

    await t.test('Edge cases', () => {
        assert.deepStrictEqual(filterAndMap([]), []); // Empty array
        assert.deepStrictEqual(filterAndMap([{ name: "Tom", age: 15 }]), []); // No valid entries
    });
});
