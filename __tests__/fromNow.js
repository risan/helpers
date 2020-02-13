/* global expect:false, test:false */
import fromNow from '../src/fromNow';

test('it can get the distance from the past value', () => {
  expect(fromNow(new Date(Date.now() - 1 * 1000))).toMatch(/a minute ago/i);

  expect(fromNow(new Date(Date.now() - 1 * 1000 * 60))).toMatch(
    /1 minute ago/i
  );

  expect(fromNow(new Date(Date.now() - 2 * 1000 * 60))).toMatch(
    /2 minutes ago/i
  );

  expect(fromNow(new Date(Date.now() - 5 * 1000 * 60))).toMatch(
    /5 minutes ago/i
  );

  expect(fromNow(new Date(Date.now() - 1 * 1000 * 60 * 60))).toMatch(
    /1 hour ago/i
  );

  expect(fromNow(new Date(Date.now() - 2 * 1000 * 60 * 60))).toMatch(
    /2 hours ago/i
  );

  expect(fromNow(new Date(Date.now() - 1 * 1000 * 60 * 60 * 24))).toMatch(
    /1 day ago/i
  );

  expect(fromNow(new Date(Date.now() - 2 * 1000 * 60 * 60 * 24))).toMatch(
    /2 days ago/i
  );

  expect(fromNow(new Date(Date.now() - 32 * 1000 * 60 * 60 * 24))).toMatch(
    /1 month ago/i
  );

  expect(fromNow(new Date(Date.now() - 62 * 1000 * 60 * 60 * 24))).toMatch(
    /2 months ago/i
  );

  expect(fromNow(new Date(Date.now() - 370 * 1000 * 60 * 60 * 24))).toMatch(
    /1 year ago/i
  );

  expect(fromNow(new Date(Date.now() - 2 * 370 * 1000 * 60 * 60 * 24))).toMatch(
    /2 years ago/i
  );
});

test('it can get the distance from the future value', () => {
  expect(fromNow(new Date(Date.now() + 1 * 1000))).toMatch(
    /in less than a minute/i
  );

  expect(fromNow(new Date(Date.now() + 1 * 1000 * 60))).toMatch(
    /in[\s\S]+1 minute/i
  );

  expect(fromNow(new Date(Date.now() + 2 * 1000 * 60))).toMatch(
    /in[\s\S]+2 minutes/i
  );

  expect(fromNow(new Date(Date.now() + 5 * 1000 * 60))).toMatch(
    /in[\s\S]+5 minutes/i
  );

  expect(fromNow(new Date(Date.now() + 1 * 1000 * 60 * 60))).toMatch(
    /in[\s\S]+1 hour/i
  );

  expect(fromNow(new Date(Date.now() + 2 * 1000 * 60 * 60))).toMatch(
    /in[\s\S]+2 hours/i
  );

  expect(fromNow(new Date(Date.now() + 1 * 1000 * 60 * 60 * 24))).toMatch(
    /in[\s\S]+1 day/i
  );

  expect(fromNow(new Date(Date.now() + 2 * 1000 * 60 * 60 * 24))).toMatch(
    /in[\s\S]+2 days/i
  );

  expect(fromNow(new Date(Date.now() + 32 * 1000 * 60 * 60 * 24))).toMatch(
    /in[\s\S]+1 month/i
  );

  expect(fromNow(new Date(Date.now() + 62 * 1000 * 60 * 60 * 24))).toMatch(
    /in[\s\S]+2 months/i
  );

  expect(fromNow(new Date(Date.now() + 370 * 1000 * 60 * 60 * 24))).toMatch(
    /in[\s\S]+1 year/i
  );

  expect(fromNow(new Date(Date.now() + 2 * 370 * 1000 * 60 * 60 * 24))).toMatch(
    /in[\s\S]+2 years/i
  );
});

test('it can recognize several datestring pattern automatically', () => {
  expect(fromNow('1990-08-31')).toMatch(/ago/);
  expect(fromNow('2100-08-31')).toMatch(/in/);

  expect(fromNow('1990-08-31T08:15:30')).toMatch(/ago/);
  expect(fromNow('2100-08-31T08:15:30')).toMatch(/in/);

  expect(fromNow('1990-08-31T08:15:30.250')).toMatch(/ago/);
  expect(fromNow('2100-08-31T08:15:30.250')).toMatch(/in/);

  expect(fromNow('1990-08-31T08:15:30+02:00')).toMatch(/ago/);
  expect(fromNow('2100-08-31T08:15:30+02:00')).toMatch(/in/);

  expect(fromNow('1990-08-31 08:15:30')).toMatch(/ago/);
  expect(fromNow('2100-08-31 08:15:30')).toMatch(/in/);

  expect(fromNow('1990-08-31 08:15:30.250')).toMatch(/ago/);
  expect(fromNow('2100-08-31 08:15:30.250')).toMatch(/in/);

  expect(fromNow('/Date(652065330000)/')).toMatch(/ago/);
  expect(fromNow('/Date(4123358130000)/')).toMatch(/in/);

  expect(fromNow('/Date(652065330000-0200)/')).toMatch(/ago/);
  expect(fromNow('/Date(4123358130000+0200)/')).toMatch(/in/);
});

test('it accepts a custom pattern', () => {
  expect(fromNow('19900831', 'yyyymmdd')).toMatch(/ago/);
  expect(fromNow('2100_08_31', 'yyyy_mm_dd')).toMatch(/in/);
});

test('it returns null if the value is empty or invalid', () => {
  expect(fromNow('foo')).toBeNull();
  expect(fromNow(new Date('foo'))).toBeNull();
  expect(fromNow('2020-08-32')).toBeNull();
  expect(fromNow('20200832', 'MM/dd/yyyy', 'yyyyMMdd')).toBeNull();
});
