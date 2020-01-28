/* global expect:false, test:false */
import { isEmpty } from '../src/index';

test('it returns true for an empty value', () => {
  expect(isEmpty(null)).toBe(true);
  expect(isEmpty(undefined)).toBe(true);
  expect(isEmpty(NaN)).toBe(true);
  expect(isEmpty('')).toBe(true);
  expect(isEmpty(' ')).toBe(true);
  expect(isEmpty([])).toBe(true);
  expect(isEmpty({})).toBe(true);
  expect(isEmpty(new Date('foo'))).toBe(true);
  expect(isEmpty(new Set())).toBe(true);
  expect(isEmpty(new Map())).toBe(true);
});

test('it returns false for a non-empty value', () => {
  expect(isEmpty(Infinity)).toBe(false);
  expect(isEmpty(true)).toBe(false);
  expect(isEmpty(false)).toBe(false);
  expect(isEmpty(0)).toBe(false);
  expect(isEmpty(123)).toBe(false);
  expect(isEmpty(-123)).toBe(false);
  expect(isEmpty(0.0)).toBe(false);
  expect(isEmpty(3.14)).toBe(false);
  expect(isEmpty(-3.14)).toBe(false);
  expect(isEmpty('foo')).toBe(false);
  expect(isEmpty([1, 2])).toBe(false);
  expect(isEmpty({ foo: 'bar' })).toBe(false);
  expect(isEmpty(new Date())).toBe(false);
  expect(isEmpty(new Set([1, 2]))).toBe(false);

  const foo = new Map();
  foo.set('bar', 'baz');
  expect(isEmpty(foo)).toBe(false);
});
