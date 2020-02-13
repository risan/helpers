/* global expect:false, test:false */
import isSet from '../src/isSet';

test('it returns true for a Set instance', () => {
  expect(isSet(new Set())).toBe(true);
  expect(isSet(new Set([1, 2, 3]))).toBe(true);
});

test('it returns false for a non-Set instance', () => {
  expect(isSet(null)).toBe(false);
  expect(isSet(undefined)).toBe(false);
  expect(isSet(NaN)).toBe(false);
  expect(isSet(Infinity)).toBe(false);
  expect(isSet(true)).toBe(false);
  expect(isSet(false)).toBe(false);
  expect(isSet(0)).toBe(false);
  expect(isSet(123)).toBe(false);
  expect(isSet(-123)).toBe(false);
  expect(isSet(0.0)).toBe(false);
  expect(isSet(3.14)).toBe(false);
  expect(isSet(-3.14)).toBe(false);
  expect(isSet('')).toBe(false);
  expect(isSet('foo')).toBe(false);
  expect(isSet([])).toBe(false);
  expect(isSet([1, 2])).toBe(false);
  expect(isSet({})).toBe(false);
  expect(isSet({ foo: 'bar' })).toBe(false);
  expect(isSet(new Date())).toBe(false);
  expect(isSet(new Map())).toBe(false);
});
