/* global expect:false, test:false */
import { monthNames, shortMonthNames, states } from '../src';

test('there are twelve months', () => {
  expect(monthNames).toHaveLength(12);
  expect(shortMonthNames).toHaveLength(12);
});

test('there are 52 states', () => {
  expect(states).toHaveLength(52);
});

test('each state object has abbr and name properties', () => {
  expect(states[0]).toHaveProperty('abbr');
  expect(states[0]).toHaveProperty('name');
});
