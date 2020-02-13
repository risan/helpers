/* global expect:false, test:false */
import formatPercentFrom from '../src/formatPercentFrom';

test('it can calculate the percentage', () => {
  expect(formatPercentFrom(0, 100)).toBe('0.00%');
  expect(formatPercentFrom(25, 100)).toBe('25.00%');
  expect(formatPercentFrom(-25, 100)).toBe('-25.00%');
  expect(formatPercentFrom(50, 100)).toBe('50.00%');
  expect(formatPercentFrom(100, 100)).toBe('100.00%');
  expect(formatPercentFrom(150, 100)).toBe('150.00%');
  expect(formatPercentFrom(200, 100)).toBe('200.00%');
  expect(formatPercentFrom(100.25, 100)).toBe('100.25%');
});

test('it can accept a custom fraction digits', () => {
  expect(formatPercentFrom(12.7581, 100, 0)).toBe('13%');
  expect(formatPercentFrom(12.7581, 100, 1)).toBe('12.8%');
  expect(formatPercentFrom(12.7581, 100, 2)).toBe('12.76%');
  expect(formatPercentFrom(12.7581, 100, 3)).toBe('12.758%');
  expect(formatPercentFrom(12.7581, 100, 4)).toBe('12.7581%');
  expect(formatPercentFrom(12.7581, 100, 5)).toBe('12.75810%');
});

test('it can calculate the percentage from 0 total', () => {
  expect(formatPercentFrom(0, 0)).toBe('0.00%');
  expect(formatPercentFrom(123, 0)).toBe('100.00%');
  expect(formatPercentFrom(-123, 0)).toBe('-100.00%');
});

test('it can calculate the percentage from string', () => {
  expect(formatPercentFrom('0', '100')).toBe('0.00%');
  expect(formatPercentFrom('25', '100')).toBe('25.00%');
  expect(formatPercentFrom('50', '100')).toBe('50.00%');
});

test('it returns null if value cannot be parsed', () => {
  expect(formatPercentFrom('foo', 100)).toBeNull();
  expect(formatPercentFrom([], 100)).toBeNull();
  expect(formatPercentFrom({}, 100)).toBeNull();
});
