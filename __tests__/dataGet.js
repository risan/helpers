/* global expect:false, test:false */
import { dataGet } from '../src';

test('it can retrieve value by path', () => {
  expect(dataGet({ foo: 'bar' }, 'foo')).toBe('bar');
  expect(dataGet({ foo: { bar: 'baz' } }, 'foo.bar')).toBe('baz');
  expect(dataGet([1, 2, 3], '[1]')).toBe(2);
  expect(dataGet({ foo: [1, 2, 3] }, 'foo.[1]')).toBe(2);
  expect(dataGet([{}, { id: 123 }], '[1].id')).toBe(123);
});

test('it returns undefined if path does not exists', () => {
  expect(dataGet({ foo: 'bar' }, 'baz')).toBe(undefined);
  expect(dataGet({ foo: null }, 'foo')).toBeNull();
  expect(dataGet({ foo: undefined }, 'foo')).toBe(undefined);
});

test('it can accept a custom fallback value', () => {
  expect(dataGet({ foo: 'bar' }, 'baz', 123)).toBe(123);
});
