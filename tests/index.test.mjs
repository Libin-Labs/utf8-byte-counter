import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('counts ASCII bytes', () => {
  assert.equal(api.utf8ByteLength('abc'), 3);
});
test('counts multibyte accent', () => {
  assert.equal(api.utf8ByteLength('é'), 2);
});
test('counts supplementary code point', () => {
  assert.equal(api.utf8ByteLength('😀'), 4);
});
test('counts empty string', () => {
  assert.equal(api.utf8ByteLength(''), 0);
});
test('counts combining sequence separately', () => {
  assert.equal(api.utf8ByteLength('é'), 3);
});
test('rejects non-string input', () => {
  assert.throws(() => api.utf8ByteLength(2), TypeError);
});
