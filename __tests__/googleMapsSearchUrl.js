/* global expect:false, test:false */
import googleMapsSearchUrl from '../src/googleMapsSearchUrl';

test('it can generate google maps search url', () => {
  expect(googleMapsSearchUrl('foo')).toBe(
    'https://www.google.com/maps/search/foo'
  );
  expect(googleMapsSearchUrl('foo bar')).toBe(
    'https://www.google.com/maps/search/foo%20bar'
  );
});
