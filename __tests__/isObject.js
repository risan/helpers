/* global expect:false, test:false */
import { isObject } from '../src/index';

test('it returns true for a plain object', () => {
  expect(isObject({})).toBe(true);
  expect(isObject({ foo: 'bar' })).toBe(true);
  expect(isObject(Object.create(null))).toBe(true);
});

test('it returns true for a custom object', () => {
  function Foo() {}
  expect(isObject(new Foo())).toBe(true);

  class Bar {}
  expect(isObject(new Bar())).toBe(true);
});

test('it returns false for other value types', () => {
  expect(isObject(null)).toBe(false);
  expect(isObject(undefined)).toBe(false);
  expect(isObject(NaN)).toBe(false);
  expect(isObject(Infinity)).toBe(false);
  expect(isObject(true)).toBe(false);
  expect(isObject(false)).toBe(false);
  expect(isObject(0)).toBe(false);
  expect(isObject(123)).toBe(false);
  expect(isObject(-123)).toBe(false);
  expect(isObject(0.0)).toBe(false);
  expect(isObject(3.14)).toBe(false);
  expect(isObject(-3.14)).toBe(false);
  expect(isObject('')).toBe(false);
  expect(isObject('foo')).toBe(false);
  expect(isObject([])).toBe(false);
  expect(isObject([1, 2])).toBe(false);
  expect(isObject(new Date())).toBe(false);
  expect(isObject(new Set())).toBe(false);
  expect(isObject(new Map())).toBe(false);
});
