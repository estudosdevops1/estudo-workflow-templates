import test from 'node:test';
import assert from 'node:assert';
import { hello } from './index.js';

test('hello returns saudação correta', () => {
  assert.strictEqual(hello('Dev'), 'Olá, Dev!');
});
