/* global expect:false, test:false */
import { getRatio } from '../src/index';

test('it can calculate the ratio', () => {
  expect(getRatio(0, 100)).toBe(0);
  expect(getRatio(25, 100)).toBe(0.25);
  expect(getRatio(50, 100)).toBe(0.5);
  expect(getRatio(100, 100)).toBe(1);
  expect(getRatio(0, 0)).toBe(0);
  expect(getRatio(123, 0)).toBe(1);
  expect(getRatio(-123, 0)).toBe(-1);
  expect(getRatio('25', '100')).toBe(0.25);
});

test('it returns null if value cannot be parsed', () => {
  expect(getRatio('foo', 100)).toBeNull();
  expect(getRatio([], 100)).toBeNull();
  expect(getRatio({}, 100)).toBeNull();
});
