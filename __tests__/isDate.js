/* global expect:false, test:false */
import isDate from '../src/isDate';

test('it returns true for a date instance', () => {
  expect(isDate(new Date())).toBe(true);
  expect(isDate(new Date(2020, 0, 1))).toBe(true);
});

test('it returns false for an invalid date instance', () => {
  expect(isDate(new Date('foo bar'))).toBe(false);
});

test('it returns false for a non-date instance', () => {
  expect(isDate(null)).toBe(false);
  expect(isDate(undefined)).toBe(false);
  expect(isDate(NaN)).toBe(false);
  expect(isDate(Infinity)).toBe(false);
  expect(isDate(true)).toBe(false);
  expect(isDate(false)).toBe(false);
  expect(isDate(0)).toBe(false);
  expect(isDate(123)).toBe(false);
  expect(isDate(-123)).toBe(false);
  expect(isDate(0.0)).toBe(false);
  expect(isDate(3.14)).toBe(false);
  expect(isDate(-3.14)).toBe(false);
  expect(isDate('')).toBe(false);
  expect(isDate('foo')).toBe(false);
  expect(isDate([])).toBe(false);
  expect(isDate([1, 2])).toBe(false);
  expect(isDate({})).toBe(false);
  expect(isDate({ foo: 'bar' })).toBe(false);
  expect(isDate(new Set())).toBe(false);
  expect(isDate(new Map())).toBe(false);
});
