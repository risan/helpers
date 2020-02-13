/* global expect:false, test:false */
import formatPercent from '../src/formatPercent';

test('it can format an integer type', () => {
  expect(formatPercent(0)).toBe('0.00%');
  expect(formatPercent(1)).toBe('100.00%');
  expect(formatPercent(-1)).toBe('-100.00%');
});

test('it can format a float type', () => {
  expect(formatPercent(0.0)).toBe('0.00%');
  expect(formatPercent(0.251)).toBe('25.10%');
  expect(formatPercent(-0.251)).toBe('-25.10%');
});

test('it can format a number with string type', () => {
  expect(formatPercent('0.0')).toBe('0.00%');
  expect(formatPercent('0.251')).toBe('25.10%');
  expect(formatPercent('-0.251')).toBe('-25.10%');
});

test('it returns null if it cannot be parsed', () => {
  expect(formatPercent('foo')).toBeNull();
  expect(formatPercent([])).toBeNull();
  expect(formatPercent({})).toBeNull();
});

test('it can accept a custom fraction digits', () => {
  expect(formatPercent('0.5432', 0)).toBe('54%');
  expect(formatPercent('0.5432', 1)).toBe('54.3%');
  expect(formatPercent('0.5432', 2)).toBe('54.32%');
  expect(formatPercent('0.5432', 3)).toBe('54.320%');
});
