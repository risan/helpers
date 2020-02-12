/* global expect:false, test:false */
import { parsePhone } from '../src/index';

test('it returns null if the value is not a string or number', () => {
  expect(parsePhone(null)).toBeNull();
  expect(parsePhone(undefined)).toBeNull();
  expect(parsePhone(true)).toBeNull();
  expect(parsePhone(false)).toBeNull();
  expect(parsePhone([1, 2, 3])).toBeNull();
  expect(parsePhone({ foo: 'bar' })).toBeNull();
});

test('it returns null if the value is an empty string', () => {
  expect(parsePhone('')).toBeNull();
  expect(parsePhone(' ')).toBeNull();
});

test('it returns the value itself if does not match the US phone pattern', () => {
  expect(parsePhone('222')).toBe('222');
  expect(parsePhone('222-3333')).toBe('222-3333');
});

test('it can parse 9 digits phone number', () => {
  const parsed = {
    countryCode: null,
    areaCode: '222',
    centralOfficeCode: '333',
    lineNumber: '4444',
    extension: null,
  };

  expect(parsePhone(2223334444)).toStrictEqual(parsed);
  expect(parsePhone('2223334444')).toStrictEqual(parsed);
  expect(parsePhone('222 333 4444')).toStrictEqual(parsed);
  expect(parsePhone('222-333-4444')).toStrictEqual(parsed);
  expect(parsePhone('222.333.4444')).toStrictEqual(parsed);
  expect(parsePhone('222 333-4444')).toStrictEqual(parsed);
  expect(parsePhone('(222)3334444')).toStrictEqual(parsed);
  expect(parsePhone('(222) 3334444')).toStrictEqual(parsed);
  expect(parsePhone('(222) 333 4444')).toStrictEqual(parsed);
  expect(parsePhone('(222) 333-4444')).toStrictEqual(parsed);
});

test('it can parse 10 digits phone number', () => {
  const parsed = {
    countryCode: '+1',
    areaCode: '222',
    centralOfficeCode: '333',
    lineNumber: '4444',
    extension: null,
  };

  expect(parsePhone(12223334444)).toStrictEqual(parsed);
  expect(parsePhone('12223334444')).toStrictEqual(parsed);
  expect(parsePhone('1 222 333 4444')).toStrictEqual(parsed);
  expect(parsePhone('1-222-333-4444')).toStrictEqual(parsed);
  expect(parsePhone('1 222.333.4444')).toStrictEqual(parsed);
  expect(parsePhone('1 222 333-4444')).toStrictEqual(parsed);
  expect(parsePhone('1 (222) 333-4444')).toStrictEqual(parsed);

  expect(parsePhone('+12223334444')).toStrictEqual(parsed);
  expect(parsePhone('+1 222 333 4444')).toStrictEqual(parsed);
  expect(parsePhone('+1-222-333-4444')).toStrictEqual(parsed);
  expect(parsePhone('+1 222.333.4444')).toStrictEqual(parsed);
  expect(parsePhone('+1 222 333-4444')).toStrictEqual(parsed);
  expect(parsePhone('+1 (222) 333-4444')).toStrictEqual(parsed);
});

test('it can parse phone number with extension', () => {
  const parsed = {
    countryCode: null,
    areaCode: '222',
    centralOfficeCode: '333',
    lineNumber: '4444',
    extension: '777',
  };

  const withCountryCode = {
    ...parsed,
    countryCode: '+1',
  };

  expect(parsePhone('2223334444x777')).toStrictEqual(parsed);
  expect(parsePhone('222 333 4444 x777')).toStrictEqual(parsed);
  expect(parsePhone('222-333-4444 x777')).toStrictEqual(parsed);
  expect(parsePhone('222.333.4444x777')).toStrictEqual(parsed);
  expect(parsePhone('222 333-4444 x777')).toStrictEqual(parsed);
  expect(parsePhone('(222) 333-4444 x777')).toStrictEqual(parsed);

  expect(parsePhone('+12223334444x777')).toStrictEqual(withCountryCode);
  expect(parsePhone('+1 222 333 4444 x777')).toStrictEqual(withCountryCode);
  expect(parsePhone('+1-222-333-4444 x777')).toStrictEqual(withCountryCode);
  expect(parsePhone('+1 222.333.4444x777')).toStrictEqual(withCountryCode);
  expect(parsePhone('+1 222 333-4444 x777')).toStrictEqual(withCountryCode);
  expect(parsePhone('+1 (222) 333-4444 x777')).toStrictEqual(withCountryCode);

  expect(parsePhone('222-333-4444 ext777')).toStrictEqual(parsed);
  expect(parsePhone('222-333-4444 ext 777')).toStrictEqual(parsed);
  expect(parsePhone('222-333-4444 ext.777')).toStrictEqual(parsed);
  expect(parsePhone('222-333-4444 ext. 777')).toStrictEqual(parsed);
  expect(parsePhone('222-333-4444 extension 777')).toStrictEqual(parsed);
});
