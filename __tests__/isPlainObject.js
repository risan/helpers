/* global expect:false, test:false */
import { isPlainObject } from '../src';

test('it returns true for a plain object', () => {
  expect(isPlainObject({})).toBe(true);
  expect(isPlainObject({ foo: 'bar' })).toBe(true);
  expect(isPlainObject(Object.create(null))).toBe(true);
});

test('it returns false for a custom object', () => {
  function Foo() {}
  expect(isPlainObject(new Foo())).toBe(false);

  class Bar {}
  expect(isPlainObject(new Bar())).toBe(false);
});

test('it returns false for other value types', () => {
  expect(isPlainObject(null)).toBe(false);
  expect(isPlainObject(undefined)).toBe(false);
  expect(isPlainObject(NaN)).toBe(false);
  expect(isPlainObject(Infinity)).toBe(false);
  expect(isPlainObject(true)).toBe(false);
  expect(isPlainObject(false)).toBe(false);
  expect(isPlainObject(0)).toBe(false);
  expect(isPlainObject(123)).toBe(false);
  expect(isPlainObject(-123)).toBe(false);
  expect(isPlainObject(0.0)).toBe(false);
  expect(isPlainObject(3.14)).toBe(false);
  expect(isPlainObject(-3.14)).toBe(false);
  expect(isPlainObject('')).toBe(false);
  expect(isPlainObject('foo')).toBe(false);
  expect(isPlainObject([])).toBe(false);
  expect(isPlainObject([1, 2])).toBe(false);
  expect(isPlainObject(new Date())).toBe(false);
  expect(isPlainObject(new Set())).toBe(false);
  expect(isPlainObject(new Map())).toBe(false);
});
