/* global expect:false, test:false */
import { dataRemove } from '../src';

test('it can remove the property at path of object', () => {
  const one = { foo: 1, bar: 2 };

  expect(dataRemove(one, 'bar')).toBe(true);
  expect(one).toStrictEqual({ foo: 1 });

  const two = { foo: 1, bar: { baz: 2 } };

  expect(dataRemove(two, 'bar.baz')).toBe(true);
  expect(two).toStrictEqual({ foo: 1, bar: {} });
});
