/* global expect:false, test:false */
import { lowerCaseKeys } from '../src';

test('it can transform property name to lower case', () => {
  expect(
    lowerCaseKeys({
      USER_ID: 12,
      USER_ADDRESS: 'foo',
      USER_AGE: 30,
    })
  ).toStrictEqual({
    user_id: 12,
    user_address: 'foo',
    user_age: 30,
  });
});
