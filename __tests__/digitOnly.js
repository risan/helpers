/* global expect:false, test:false */
import { digitOnly } from '../src/index';

test('it returns null if the value is not a string or number', () => {
  expect(digitOnly(null)).toBeNull();
  expect(digitOnly(undefined)).toBeNull();
  expect(digitOnly(true)).toBeNull();
  expect(digitOnly(false)).toBeNull();
  expect(digitOnly([1, 2, 3])).toBeNull();
  expect(digitOnly({ foo: 'bar' })).toBeNull();
});

test('it returns an absolute value in string if the value is an integer', () => {
  expect(digitOnly(0)).toBe('0');
  expect(digitOnly(123)).toBe('123');
  expect(digitOnly(-123)).toBe('123');
});

test('it parse float to string before removing the sign and decimal point', () => {
  expect(digitOnly(3.14)).toBe('314');
  expect(digitOnly(-3.14)).toBe('314');
});

test('it remove non-digit characters from string', () => {
  expect(digitOnly('123-456-7890')).toBe('1234567890');
  expect(digitOnly('1 2_3-4X5*6,7.8?9a0')).toBe('1234567890');
});
