/* global expect:false, test:false */
import { isBoolean } from '../src';

test('it returns true for a boolean value', () => {
  expect(isBoolean(true)).toBe(true);
  expect(isBoolean(false)).toBe(true);
});

test('it returns false for a 1 or 0', () => {
  expect(isBoolean(1)).toBe(false);
  expect(isBoolean(0)).toBe(false);
  expect(isBoolean(0.0)).toBe(false);
  expect(isBoolean(1.0)).toBe(false);
});

test('it returns false for a non-boolean value', () => {
  expect(isBoolean(null)).toBe(false);
  expect(isBoolean(undefined)).toBe(false);
  expect(isBoolean(NaN)).toBe(false);
  expect(isBoolean(Infinity)).toBe(false);
  expect(isBoolean(123)).toBe(false);
  expect(isBoolean(-123)).toBe(false);
  expect(isBoolean(3.14)).toBe(false);
  expect(isBoolean(-3.14)).toBe(false);
  expect(isBoolean('')).toBe(false);
  expect(isBoolean('foo')).toBe(false);
  expect(isBoolean([])).toBe(false);
  expect(isBoolean([1, 2])).toBe(false);
  expect(isBoolean({})).toBe(false);
  expect(isBoolean({ foo: 'bar' })).toBe(false);
  expect(isBoolean(new Date())).toBe(false);
  expect(isBoolean(new Set())).toBe(false);
  expect(isBoolean(new Map())).toBe(false);
});
