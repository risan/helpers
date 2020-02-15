/* global expect:false, test:false */
import { sum } from '../src';

test('it can sum an array of integer', () => {
  expect(sum([1, 2, 3])).toBe(6);
  expect(sum([-1, -2, -3])).toBe(-6);
});

test('it can sum an array of float', () => {
  expect(sum([1.25, 2.25, 3.25])).toBe(6.75);
  expect(sum([-1.25, -2.25, -3.25])).toBe(-6.75);
});

test('it can sum an array of float in string', () => {
  expect(sum(['1.25', '2.25', '3.25'])).toBe(6.75);
  expect(sum(['-1.25', '-2.25', '-3.25'])).toBe(-6.75);
});

test('it can sum an array of boolean', () => {
  expect(sum([true, false, true])).toBe(2);
});

test('it can sum an array of object', () => {
  expect(sum([{ a: 1.25 }, { a: 2.25 }, { a: 3.25 }], 'a')).toBe(6.75);
  expect(sum([{ b: 1.25 }, { a: 2.25 }, { a: 3.25 }], 'a')).toBe(5.5);
});

test('it can sum an array of object with dot notation', () => {
  expect(
    sum([{ a: { b: 1.25 } }, { a: { b: 2.25 } }, { a: { b: 3.25 } }], 'a.b')
  ).toBe(6.75);
});
