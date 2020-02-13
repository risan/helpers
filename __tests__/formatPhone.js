/* global expect:false, test:false */
import formatPhone from '../src/formatPhone';

test('it returns null if the value is not a string or number', () => {
  expect(formatPhone(null)).toBeNull();
  expect(formatPhone(undefined)).toBeNull();
  expect(formatPhone(true)).toBeNull();
  expect(formatPhone(false)).toBeNull();
  expect(formatPhone([1, 2, 3])).toBeNull();
  expect(formatPhone({ foo: 'bar' })).toBeNull();
});

test('it returns null if the value is an empty string', () => {
  expect(formatPhone('')).toBeNull();
  expect(formatPhone(' ')).toBeNull();
});

test('it returns the value itself if does not match the US phone pattern', () => {
  expect(formatPhone('222')).toBe('222');
  expect(formatPhone('222-3333')).toBe('222-3333');
});

test('it can format 9 digits phone number', () => {
  const formatted = '(222) 333-4444';

  expect(formatPhone('2223334444')).toBe(formatted);
  expect(formatPhone('222 333 4444')).toBe(formatted);
  expect(formatPhone('222-333-4444')).toBe(formatted);
  expect(formatPhone('222.333.4444')).toBe(formatted);
  expect(formatPhone('222-3334444')).toBe(formatted);
  expect(formatPhone('(222)3334444')).toBe(formatted);
  expect(formatPhone('(222)333-4444')).toBe(formatted);
  expect(formatPhone('(222) 333-4444')).toBe(formatted);
});

test('it can format 10 digits phone number', () => {
  const formatted = '+1 (222) 333-4444';

  expect(formatPhone('12223334444')).toBe(formatted);
  expect(formatPhone('1 222 333 4444')).toBe(formatted);
  expect(formatPhone('1-222-333-4444')).toBe(formatted);
  expect(formatPhone('1.222.333.4444')).toBe(formatted);
  expect(formatPhone('1-222-3334444')).toBe(formatted);
  expect(formatPhone('1(222)3334444')).toBe(formatted);
  expect(formatPhone('1(222)333-4444')).toBe(formatted);
  expect(formatPhone('1 (222) 333-4444')).toBe(formatted);

  expect(formatPhone('+12223334444')).toBe(formatted);
  expect(formatPhone('+1 222 333 4444')).toBe(formatted);
  expect(formatPhone('+1-222-333-4444')).toBe(formatted);
  expect(formatPhone('+1.222.333.4444')).toBe(formatted);
  expect(formatPhone('+1-222-3334444')).toBe(formatted);
  expect(formatPhone('+1(222)3334444')).toBe(formatted);
  expect(formatPhone('+1(222)333-4444')).toBe(formatted);
  expect(formatPhone('+1 (222) 333-4444')).toBe(formatted);
});

test('it can format phone number with extension', () => {
  let formatted = '(222) 333-4444 ext. 777';

  expect(formatPhone('2223334444x777')).toBe(formatted);
  expect(formatPhone('222-333-4444x777')).toBe(formatted);
  expect(formatPhone('(222) 333-4444 x777')).toBe(formatted);
  expect(formatPhone('222-333-4444 ext 777')).toBe(formatted);
  expect(formatPhone('222-333-4444 Ext 777')).toBe(formatted);
  expect(formatPhone('222-333-4444 ext. 777')).toBe(formatted);
  expect(formatPhone('222-333-4444 Ext. 777')).toBe(formatted);
  expect(formatPhone('222-333-4444 extension 777')).toBe(formatted);

  formatted = '+1 (222) 333-4444 ext. 777';

  expect(formatPhone('12223334444x777')).toBe(formatted);
  expect(formatPhone('1-222-333-4444x777')).toBe(formatted);
  expect(formatPhone('1 (222) 333-4444 x777')).toBe(formatted);
  expect(formatPhone('1 222-333-4444 ext 777')).toBe(formatted);
  expect(formatPhone('1-222-333-4444 Ext 777')).toBe(formatted);
  expect(formatPhone('1-222-333-4444 ext. 777')).toBe(formatted);
  expect(formatPhone('1-222-333-4444 Ext. 777')).toBe(formatted);
  expect(formatPhone('1-222-333-4444 extension 777')).toBe(formatted);
});
