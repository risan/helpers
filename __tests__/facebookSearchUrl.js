/* global expect:false, test:false */
import { facebookSearchUrl } from '../src';

test('it can generate facebook search url', () => {
  expect(facebookSearchUrl('foo')).toBe(
    'https://www.facebook.com/search?q=foo'
  );
  expect(facebookSearchUrl('foo bar')).toBe(
    'https://www.facebook.com/search?q=foo%20bar'
  );
});
