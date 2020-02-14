/* global expect:false, test:false */
import googleSearchUrl from '../src/googleSearchUrl';

test('it can generate google maps search url', () => {
  expect(googleSearchUrl('foo')).toBe('https://www.google.com/search?q=foo');
  expect(googleSearchUrl('foo bar')).toBe(
    'https://www.google.com/search?q=foo%20bar'
  );
});
