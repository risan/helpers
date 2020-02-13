/* global expect:false, test:false */
import parseDate from '../src/parseDate';

test('it returns the value itself if it is a date instance', () => {
  const date = new Date();

  expect(parseDate(date)).toBe(date);
});

test('it returns null if the value is empty', () => {
  expect(parseDate(null)).toBeNull();
  expect(parseDate('')).toBeNull();
  expect(parseDate(new Date('foo'))).toBeNull();
});

test('it returns null if the value is not a string or number', () => {
  expect(parseDate([1, 2])).toBeNull();
  expect(parseDate({ foo: 'bar' })).toBeNull();
  expect(parseDate(new Set([1, 2]))).toBeNull();
});

test('it can parse a number', () => {
  expect(parseDate(0)).toStrictEqual(new Date(0));
  expect(parseDate(1580458530250)).toStrictEqual(new Date(1580458530250));
  expect(parseDate(1580458530250.0)).toStrictEqual(new Date(1580458530250));
});

test('it can parse ISO date string', () => {
  expect(parseDate('2020-08-31')).toStrictEqual(new Date(2020, 7, 31));
  expect(parseDate('2020-08-31T08:15:30')).toStrictEqual(
    new Date(2020, 7, 31, 8, 15, 30)
  );
  expect(parseDate('2020-08-31T08:15:30.250')).toStrictEqual(
    new Date(2020, 7, 31, 8, 15, 30, 250)
  );
  expect(parseDate('2020-08-31T08:15:30.250Z')).toStrictEqual(
    new Date(Date.UTC(2020, 7, 31, 8, 15, 30, 250))
  );
  expect(parseDate('2020-08-31T08:15:30+00:00')).toStrictEqual(
    new Date(Date.UTC(2020, 7, 31, 8, 15, 30))
  );
  expect(parseDate('2020-08-31T08:15:30+02:00')).toStrictEqual(
    new Date(Date.UTC(2020, 7, 31, 6, 15, 30))
  );
  expect(parseDate('2020-08-31T08:15:30-02:00')).toStrictEqual(
    new Date(Date.UTC(2020, 7, 31, 10, 15, 30))
  );
  expect(parseDate('2020-08-31T08:15:30.250+02:00')).toStrictEqual(
    new Date(Date.UTC(2020, 7, 31, 6, 15, 30, 250))
  );
  expect(parseDate('2020-08-31T08:15:30.250-02:00')).toStrictEqual(
    new Date(Date.UTC(2020, 7, 31, 10, 15, 30, 250))
  );
});

test('it can parse SQL date time string', () => {
  expect(parseDate('2020-08-31 08:15:30')).toStrictEqual(
    new Date(2020, 7, 31, 8, 15, 30)
  );

  expect(parseDate('2020-08-31 08:15:30.000')).toStrictEqual(
    new Date(2020, 7, 31, 8, 15, 30)
  );

  expect(parseDate('2020-08-31 08:15:30.250')).toStrictEqual(
    new Date(2020, 7, 31, 8, 15, 30, 250)
  );
});

test('it can parse dot net date time string', () => {
  expect(parseDate('/Date(0)/')).toStrictEqual(new Date(0));
  expect(parseDate('/Date(1580458530250)/')).toStrictEqual(
    new Date(1580458530250)
  );
  expect(parseDate('/Date(1580458530250-0700)/')).toStrictEqual(
    new Date(1580458530250)
  );
  expect(parseDate('/Date(1580458530250+0700)/')).toStrictEqual(
    new Date(1580458530250)
  );
});

test('it accepts custom pattern', () => {
  expect(parseDate('20200831', 'yyyyMMdd')).toStrictEqual(
    new Date(2020, 7, 31)
  );
  expect(parseDate('08_31_2020', 'MM_dd_yyyy')).toStrictEqual(
    new Date(2020, 7, 31)
  );
  expect(parseDate('20200831 08.15.30', 'yyyyMMdd HH.mm.ss')).toStrictEqual(
    new Date(2020, 7, 31, 8, 15, 30)
  );
});

test('it returns null if date string is invalid', () => {
  expect(parseDate('foo')).toBeNull();
  expect(parseDate('2020-08-32')).toBeNull();
  expect(parseDate('2020-08-31 08:15:70')).toBeNull();
  expect(parseDate('2020-08-31 08:15:70.250')).toBeNull();
  expect(parseDate('20200832', 'yyyyMMdd')).toBeNull();
});
