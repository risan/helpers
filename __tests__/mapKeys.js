/* global expect:false, test:false */
import { mapKeys } from '../src';

test('it can transform property names', () => {
  expect(
    mapKeys(
      {
        USER_ID: 12,
        USER_ADDRESS: 'foo',
        USER_AGE: 30,
      },
      (key, value) => `${key.toLowerCase()}_${value}`
    )
  ).toStrictEqual({
    user_id_12: 12,
    user_address_foo: 'foo',
    user_age_30: 30,
  });
});
