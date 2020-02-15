/* global expect:false, test:false */
import { isMap } from '../src';

test('it returns true for a Map instance', () => {
  expect(isMap(new Map())).toBe(true);

  const foo = new Map();
  foo.set('bar', 'baz');
  expect(isMap(foo)).toBe(true);
});

test('it returns false for a non-Map instance', () => {
  expect(isMap(null)).toBe(false);
  expect(isMap(undefined)).toBe(false);
  expect(isMap(NaN)).toBe(false);
  expect(isMap(Infinity)).toBe(false);
  expect(isMap(true)).toBe(false);
  expect(isMap(false)).toBe(false);
  expect(isMap(0)).toBe(false);
  expect(isMap(123)).toBe(false);
  expect(isMap(-123)).toBe(false);
  expect(isMap(0.0)).toBe(false);
  expect(isMap(3.14)).toBe(false);
  expect(isMap(-3.14)).toBe(false);
  expect(isMap('')).toBe(false);
  expect(isMap('foo')).toBe(false);
  expect(isMap([])).toBe(false);
  expect(isMap([1, 2])).toBe(false);
  expect(isMap({})).toBe(false);
  expect(isMap({ foo: 'bar' })).toBe(false);
  expect(isMap(new Date())).toBe(false);
  expect(isMap(new Set())).toBe(false);
});
