/* global expect:false, test:false */
import { snakeCaseKeys } from '../src/index';

test('it can transform property name to snake case', () => {
  expect(
    snakeCaseKeys({
      userId: 12,
      USER_ADDRESS: 'foo',
      'user-age': 30,
    })
  ).toStrictEqual({
    user_id: 12,
    user_address: 'foo',
    user_age: 30,
  });
});
