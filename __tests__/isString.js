/* global expect:false, test:false */
import { isString } from '../src/index';

test('it returns true for a string value', () => {
  expect(isString('')).toBe(true);
  expect(isString('foo')).toBe(true);
});

test('it returns false for a non-string value', () => {
  expect(isString(null)).toBe(false);
  expect(isString(undefined)).toBe(false);
  expect(isString(NaN)).toBe(false);
  expect(isString(Infinity)).toBe(false);
  expect(isString(true)).toBe(false);
  expect(isString(false)).toBe(false);
  expect(isString(0)).toBe(false);
  expect(isString(123)).toBe(false);
  expect(isString(-123)).toBe(false);
  expect(isString(0.0)).toBe(false);
  expect(isString(3.14)).toBe(false);
  expect(isString(-3.14)).toBe(false);
  expect(isString([])).toBe(false);
  expect(isString([1, 2])).toBe(false);
  expect(isString({})).toBe(false);
  expect(isString({ foo: 'bar' })).toBe(false);
  expect(isString(new Date())).toBe(false);
  expect(isString(new Set())).toBe(false);
  expect(isString(new Map())).toBe(false);
});
