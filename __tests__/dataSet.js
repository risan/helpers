/* global expect:false, test:false */
import { dataSet } from '../src';

test('it can set the value at path of object', () => {
  expect(dataSet({ foo: 1 }, 'bar', 2)).toStrictEqual({
    foo: 1,
    bar: 2,
  });

  expect(dataSet({ foo: 1 }, 'bar.baz', 2)).toStrictEqual({
    foo: 1,
    bar: {
      baz: 2,
    },
  });
});
