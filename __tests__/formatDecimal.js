/* global expect:false, test:false */
import { formatDecimal } from '../src';

test('it can format an integer type', () => {
  expect(formatDecimal(0)).toBe('0.00');
  expect(formatDecimal(100)).toBe('100.00');
  expect(formatDecimal(-100)).toBe('-100.00');
});

test('it can format a float type', () => {
  expect(formatDecimal(0.0)).toBe('0.00');
  expect(formatDecimal(3.14)).toBe('3.14');
  expect(formatDecimal(-3.14)).toBe('-3.14');
});

test('it can format a number with string type', () => {
  expect(formatDecimal('0')).toBe('0.00');
  expect(formatDecimal('100')).toBe('100.00');
  expect(formatDecimal('-100')).toBe('-100.00');
  expect(formatDecimal('0.0')).toBe('0.00');
  expect(formatDecimal('3.14')).toBe('3.14');
  expect(formatDecimal('-3.14')).toBe('-3.14');
});

test('it returns null if it cannot be parsed', () => {
  expect(formatDecimal('foo')).toBeNull();
  expect(formatDecimal([])).toBeNull();
  expect(formatDecimal({})).toBeNull();
});

test('it can accept a custom fraction digits', () => {
  expect(formatDecimal(123.4567, 0)).toBe('123');
  expect(formatDecimal(123.4567, 1)).toBe('123.5');
  expect(formatDecimal(123.4567, 2)).toBe('123.46');
  expect(formatDecimal(123.4567, 3)).toBe('123.457');
  expect(formatDecimal(123.4567, 4)).toBe('123.4567');
  expect(formatDecimal(123.4567, 5)).toBe('123.45670');
});

test('it can accept other Intl.NumberFormat options', () => {
  expect(
    formatDecimal(10000.5, 2, {
      useGrouping: false,
    })
  ).toBe('10000.50');
});
