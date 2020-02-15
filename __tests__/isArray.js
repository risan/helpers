/* global expect:false, test:false */
import { isArray } from '../src';

test('it returns true for an array value', () => {
  expect(isArray([])).toBe(true);
  expect(isArray([[]])).toBe(true);
  expect(isArray([1, 2])).toBe(true);
  expect(isArray(['a', 'b'])).toBe(true);
});

test('it returns false for a non-array value', () => {
  expect(isArray(null)).toBe(false);
  expect(isArray(undefined)).toBe(false);
  expect(isArray(NaN)).toBe(false);
  expect(isArray(Infinity)).toBe(false);
  expect(isArray(true)).toBe(false);
  expect(isArray(false)).toBe(false);
  expect(isArray(0)).toBe(false);
  expect(isArray(123)).toBe(false);
  expect(isArray(-123)).toBe(false);
  expect(isArray(0.0)).toBe(false);
  expect(isArray(3.14)).toBe(false);
  expect(isArray(-3.14)).toBe(false);
  expect(isArray('')).toBe(false);
  expect(isArray('foo')).toBe(false);
  expect(isArray({})).toBe(false);
  expect(isArray({ foo: 'bar' })).toBe(false);
  expect(isArray(new Date())).toBe(false);
  expect(isArray(new Set())).toBe(false);
  expect(isArray(new Map())).toBe(false);
});
