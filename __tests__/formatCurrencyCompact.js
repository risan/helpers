/* global expect:false, test:false */
import { formatCurrencyCompact } from '../src/index';

test('it can format an integer type', () => {
  expect(formatCurrencyCompact(100)).toBe('$100.00');
  expect(formatCurrencyCompact(1000)).toBe('$1.00K');
  expect(formatCurrencyCompact(1250)).toBe('$1.25K');
  expect(formatCurrencyCompact(-1250)).toBe('-$1.25K');
  expect(formatCurrencyCompact(1250000)).toBe('$1.25M');
  expect(formatCurrencyCompact(1250000000)).toBe('$1.25B');
});

test('it can format a float type', () => {
  expect(formatCurrencyCompact(1250.0)).toBe('$1.25K');
  expect(formatCurrencyCompact(-1250.0)).toBe('-$1.25K');
});

test('it can format a number with string type', () => {
  expect(formatCurrencyCompact('1250.0')).toBe('$1.25K');
  expect(formatCurrencyCompact('-1250.0')).toBe('-$1.25K');
});

test('it returns null if it cannot be parsed', () => {
  expect(formatCurrencyCompact('foo')).toBeNull();
  expect(formatCurrencyCompact([])).toBeNull();
  expect(formatCurrencyCompact({})).toBeNull();
});

test('it can accept a custom fraction digits', () => {
  expect(formatCurrencyCompact(1257, 0)).toBe('$1K');
  expect(formatCurrencyCompact(1257, 1)).toBe('$1.3K');
  expect(formatCurrencyCompact(1257, 2)).toBe('$1.26K');
  expect(formatCurrencyCompact(1257, 3)).toBe('$1.257K');
  expect(formatCurrencyCompact(1257, 4)).toBe('$1.2570K');
});

test('it can accept a custom locales and currency code', () => {
  expect(
    formatCurrencyCompact(1250, 2, {
      locales: 'de',
      currencyCode: 'EUR',
    })
  ).toBe('€1.25K');
});
