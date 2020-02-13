/* global expect:false, test:false */
import formatDecimalCompact from '../src/formatDecimalCompact';

test('it can format an integer type', () => {
  expect(formatDecimalCompact(100)).toBe('100.00');
  expect(formatDecimalCompact(1000)).toBe('1.00K');
  expect(formatDecimalCompact(1250)).toBe('1.25K');
  expect(formatDecimalCompact(-1250)).toBe('-1.25K');
  expect(formatDecimalCompact(1250000)).toBe('1.25M');
  expect(formatDecimalCompact(1250000000)).toBe('1.25B');
});

test('it can format a float type', () => {
  expect(formatDecimalCompact(1250.0)).toBe('1.25K');
  expect(formatDecimalCompact(-1250.0)).toBe('-1.25K');
});

test('it can format a number with string type', () => {
  expect(formatDecimalCompact('1250.0')).toBe('1.25K');
  expect(formatDecimalCompact('-1250.0')).toBe('-1.25K');
});

test('it returns null if it cannot be parsed', () => {
  expect(formatDecimalCompact('foo')).toBeNull();
  expect(formatDecimalCompact([])).toBeNull();
  expect(formatDecimalCompact({})).toBeNull();
});

test('it can accept a custom fraction digits', () => {
  expect(formatDecimalCompact(1257, 0)).toBe('1K');
  expect(formatDecimalCompact(1257, 1)).toBe('1.3K');
  expect(formatDecimalCompact(1257, 2)).toBe('1.26K');
  expect(formatDecimalCompact(1257, 3)).toBe('1.257K');
  expect(formatDecimalCompact(1257, 4)).toBe('1.2570K');
});
