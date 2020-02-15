/* global expect:false, test:false */
import { parseNumber } from '../src';

test('it can parse an integer type', () => {
  expect(parseNumber(0)).toBe(0);
  expect(parseNumber(100)).toBe(100);
  expect(parseNumber(-100)).toBe(-100);
});

test('it can parse a float type', () => {
  expect(parseNumber(0.0)).toBe(0.0);
  expect(parseNumber(3.14)).toBe(3.14);
  expect(parseNumber(-3.14)).toBe(-3.14);
});

test('it can parse a boolean type', () => {
  expect(parseNumber(false)).toBe(0);
  expect(parseNumber(true)).toBe(1);
});

test('it can parse a Date instance', () => {
  expect(parseNumber(new Date('1970-01-01T00:00:00+00:00'))).toBe(0);
  expect(parseNumber(new Date('1970-01-01T00:00:01+00:00'))).toBe(1000);
  expect(parseNumber(new Date('1970-01-01T00:01:00+00:00'))).toBe(60000);
  expect(parseNumber(new Date('1970-01-02T00:00:00+00:00'))).toBe(86400000);
});

test('it can parse a number with string type', () => {
  expect(parseNumber('0')).toBe(0);
  expect(parseNumber('100')).toBe(100);
  expect(parseNumber('-100')).toBe(-100);
  expect(parseNumber('0.0')).toBe(0.0);
  expect(parseNumber('3.14')).toBe(3.14);
  expect(parseNumber('-3.14')).toBe(-3.14);
});

test('it returns null if value cannot be parsed', () => {
  expect(parseNumber('foo')).toBeNull();
  expect(parseNumber([])).toBeNull();
  expect(parseNumber({})).toBeNull();
});

test('it can have a custom fallback value', () => {
  expect(parseNumber('foo', 100)).toBe(100);
  expect(parseNumber([], 3.14)).toBe(3.14);
  expect(parseNumber({}, 'bar')).toBe('bar');
});
