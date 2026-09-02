const test = require('node:test');
const assert = require('node:assert');
const { greet } = require('../app');

test('greet returns a friendly message', () => {
  assert.strictEqual(greet('World'), 'Hello, World!');
});

test('greet uses the provided name', () => {
  assert.strictEqual(greet('Jenkins'), 'Hello, Jenkins!');
});
