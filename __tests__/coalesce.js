/* global expect:false, test:false */
import coalesce from '../src/coalesce';

test('it returns null for an empty value', () => {
  expect(coalesce(null)).toBeNull();
  expect(coalesce(undefined)).toBeNull();
  expect(coalesce(NaN)).toBeNull();
  expect(coalesce('')).toBeNull();
  expect(coalesce(' ')).toBeNull();
  expect(coalesce([])).toBeNull();
  expect(coalesce({})).toBeNull();
  expect(coalesce(new Date('foo'))).toBeNull();
  expect(coalesce(new Set())).toBeNull();
  expect(coalesce(new Map())).toBeNull();
});

test('it returns itself for a non-empty value', () => {
  expect(coalesce(Infinity)).toBe(Infinity);
  expect(coalesce(true)).toBe(true);
  expect(coalesce(false)).toBe(false);
  expect(coalesce(0)).toBe(0);
  expect(coalesce(123)).toBe(123);
  expect(coalesce(-123)).toBe(-123);
  expect(coalesce(0.0)).toBe(0.0);
  expect(coalesce(3.14)).toBe(3.14);
  expect(coalesce(-3.14)).toBe(-3.14);
  expect(coalesce('foo')).toBe('foo');
  expect(coalesce([1, 2])).toStrictEqual([1, 2]);
  expect(coalesce({ foo: 'bar' })).toStrictEqual({ foo: 'bar' });

  const date = new Date();
  expect(coalesce(date)).toBe(date);

  const set = new Set([1, 2]);
  expect(coalesce(set)).toBe(set);

  const map = new Map();
  map.set('bar', 'baz');
  expect(coalesce(map)).toBe(map);
});

test('it can have a custom fallback value', () => {
  expect(coalesce(null, 100)).toBe(100);
  expect(coalesce('', 'foo')).toBe('foo');
  expect(coalesce(' ', [1, 2])).toStrictEqual([1, 2]);
});
