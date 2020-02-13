/* global expect:false, test:false */
import formatCurrency from '../src/formatCurrency';

test('it can format an integer type', () => {
  expect(formatCurrency(0)).toBe('$0.00');
  expect(formatCurrency(100)).toBe('$100.00');
  expect(formatCurrency(-100)).toBe('-$100.00');
});

test('it can format a float type', () => {
  expect(formatCurrency(0.0)).toBe('$0.00');
  expect(formatCurrency(3.14)).toBe('$3.14');
  expect(formatCurrency(-3.14)).toBe('-$3.14');
});

test('it can format a number with string type', () => {
  expect(formatCurrency('0')).toBe('$0.00');
  expect(formatCurrency('100')).toBe('$100.00');
  expect(formatCurrency('-100')).toBe('-$100.00');
  expect(formatCurrency('0.0')).toBe('$0.00');
  expect(formatCurrency('3.14')).toBe('$3.14');
  expect(formatCurrency('-3.14')).toBe('-$3.14');
});

test('it returns null if it cannot be parsed', () => {
  expect(formatCurrency('foo')).toBeNull();
  expect(formatCurrency([])).toBeNull();
  expect(formatCurrency({})).toBeNull();
});

test('it can accept a custom fraction digits', () => {
  expect(formatCurrency(123.4567, 0)).toBe('$123');
  expect(formatCurrency(123.4567, 1)).toBe('$123.5');
  expect(formatCurrency(123.4567, 2)).toBe('$123.46');
  expect(formatCurrency(123.4567, 3)).toBe('$123.457');
  expect(formatCurrency(123.4567, 4)).toBe('$123.4567');
  expect(formatCurrency(123.4567, 5)).toBe('$123.45670');
});

test('it can accept a custom locales and currency code', () => {
  expect(
    formatCurrency(10000.5, 2, {
      locales: 'de',
      currencyCode: 'EUR',
    })
  ).toBe('€10,000.50');
});

test('it can accept other Intl.NumberFormat options', () => {
  expect(
    formatCurrency(10000.5, 2, {
      useGrouping: false,
      currencyDisplay: 'name',
    })
  ).toBe('10000.50 US dollars');
});
