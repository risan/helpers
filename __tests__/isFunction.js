/* global expect:false, test:false */
/* eslint func-names: 0 */
import { isFunction } from '../src/index';

test('it returns true for a string value', () => {
  expect(isFunction(function() {})).toBe(true);
  expect(isFunction(() => {})).toBe(true);
  expect(isFunction(Number.isNaN)).toBe(true);
});

test('it returns false for a non-string value', () => {
  expect(isFunction(null)).toBe(false);
  expect(isFunction(undefined)).toBe(false);
  expect(isFunction(NaN)).toBe(false);
  expect(isFunction(Infinity)).toBe(false);
  expect(isFunction(true)).toBe(false);
  expect(isFunction(false)).toBe(false);
  expect(isFunction('')).toBe(false);
  expect(isFunction('foo')).toBe(false);
  expect(isFunction(0)).toBe(false);
  expect(isFunction(123)).toBe(false);
  expect(isFunction(-123)).toBe(false);
  expect(isFunction(0.0)).toBe(false);
  expect(isFunction(3.14)).toBe(false);
  expect(isFunction(-3.14)).toBe(false);
  expect(isFunction([])).toBe(false);
  expect(isFunction([1, 2])).toBe(false);
  expect(isFunction({})).toBe(false);
  expect(isFunction({ foo: 'bar' })).toBe(false);
  expect(isFunction(new Date())).toBe(false);
  expect(isFunction(new Set())).toBe(false);
  expect(isFunction(new Map())).toBe(false);
});
