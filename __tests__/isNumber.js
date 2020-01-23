/* global expect:false, test:false */
import { isNumber } from '../src/index';

test('it returns true for a number value', () => {
  expect(isNumber(0)).toBe(true);
  expect(isNumber(123)).toBe(true);
  expect(isNumber(-123)).toBe(true);
  expect(isNumber(0.0)).toBe(true);
  expect(isNumber(3.14)).toBe(true);
  expect(isNumber(-3.14)).toBe(true);
});

test('it returns false for a non-Set instance', () => {
  expect(isNumber(null)).toBe(false);
  expect(isNumber(undefined)).toBe(false);
  expect(isNumber(NaN)).toBe(false);
  expect(isNumber(Infinity)).toBe(false);
  expect(isNumber(true)).toBe(false);
  expect(isNumber(false)).toBe(false);
  expect(isNumber('')).toBe(false);
  expect(isNumber('foo')).toBe(false);
  expect(isNumber([])).toBe(false);
  expect(isNumber([1, 2])).toBe(false);
  expect(isNumber({})).toBe(false);
  expect(isNumber({ foo: 'bar' })).toBe(false);
  expect(isNumber(new Date())).toBe(false);
  expect(isNumber(new Set())).toBe(false);
  expect(isNumber(new Map())).toBe(false);
});
