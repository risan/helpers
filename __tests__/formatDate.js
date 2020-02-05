/* global expect:false, test:false */
import { formatDate } from '../src/index';

test('it can format a valid date value', () => {
  expect(formatDate(new Date(2020, 7, 31))).toBe('08/31/2020');
  expect(formatDate(0)).toBe('01/01/1970');
  expect(formatDate(1598837415250.0)).toBe('08/31/2020');
  expect(formatDate('2020-08-31')).toBe('08/31/2020');
  expect(formatDate('2020-08-31T08:15:30')).toBe('08/31/2020');
  expect(formatDate('2020-08-31T08:15:30.250')).toBe('08/31/2020');
  expect(formatDate('2020-08-31T08:15:30+02:00')).toBe('08/31/2020');
  expect(formatDate('2020-08-31 08:15:30')).toBe('08/31/2020');
  expect(formatDate('2020-08-31 08:15:30.250')).toBe('08/31/2020');
  expect(formatDate('/Date(1598837415250)/')).toBe('08/31/2020');
  expect(formatDate('/Date(1598837415250+0200)/')).toBe('08/31/2020');
});

test('it returns null if the value is empty or invalid', () => {
  expect(formatDate('foo')).toBeNull();
  expect(formatDate(new Date('foo'))).toBeNull();
  expect(formatDate('2020-08-32')).toBeNull();
  expect(formatDate('20200832', 'MM/dd/yyyy', 'yyyyMMdd')).toBeNull();
});

test('it accepts a custom output pattern', () => {
  expect(formatDate('2020-08-31T08:15:30.250', 'dd-MM-yyyy')).toBe(
    '31-08-2020'
  );
  expect(formatDate('2020-08-31T08:15:30.250', 'MM/dd/yyyy h:mm a')).toBe(
    '08/31/2020 8:15 AM'
  );
});

test('it accepts a custom input pattern', () => {
  expect(formatDate('20200831', 'MM/dd/yyyy', 'yyyyMMdd')).toBe('08/31/2020');
  expect(
    formatDate('08/31/2020 8:15 AM', 'yyyy-MM-dd HH:mm:ss', 'MM/dd/yyyy h:mm a')
  ).toBe('2020-08-31 08:15:00');
});
