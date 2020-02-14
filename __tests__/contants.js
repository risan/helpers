/* global expect:false, test:false */
import monthNames from '../src/monthNames';
import shortMonthNames from '../src/shortMonthNames';

test('there are twelve months', () => {
  expect(monthNames).toHaveLength(12);
  expect(shortMonthNames).toHaveLength(12);
});
