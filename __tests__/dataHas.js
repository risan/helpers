/* global expect:false, test:false */
import dataHas from '../src/dataHas';

test('it returns true if path exist', () => {
  expect(dataHas({ foo: 'bar' }, 'foo')).toBe(true);
  expect(dataHas({ foo: { bar: 'baz' } }, 'foo.bar')).toBe(true);
  expect(dataHas([1, 2, 3], '[1]')).toBe(true);
  expect(dataHas({ foo: [1, 2, 3] }, 'foo.[1]')).toBe(true);
  expect(dataHas([{}, { id: 123 }], '[1].id')).toBe(true);
  expect(dataHas({ foo: null }, 'foo')).toBe(true);
  expect(dataHas({ foo: undefined }, 'foo')).toBe(true);
});

test('it returns false if path does not exist', () => {
  expect(dataHas({ foo: 'bar' }, 'baz')).toBe(false);
  expect(dataHas([1, 2, 3], '[3]')).toBe(false);
});
