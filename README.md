# Helpers

[![CircleCI](https://circleci.com/gh/risan/helpers.svg?style=shield)](https://circleci.com/gh/risan/helpers)
[![Codecov](https://codecov.io/gh/risan/helpers/branch/master/graph/badge.svg)](https://codecov.io/gh/risan/helpers)
[![NPM](https://img.shields.io/npm/v/@risan/helpers)](https://www.npmjs.com/package/@risan/helpers)

## Installation

```bash
$ npm install @risan/helpers
```

### CDN

You can also use the CDN directly:

```html
<script src="https://unpkg.com/@risan/helpers@latest/dist/helpers.js"></script>

<!-- Or the minified version -->
<script src="https://unpkg.com/@risan/helpers@latest/dist/helpers.min.js"></script>
```

## API

[**Type Checking:**](#type-checking)

- [`isArray()`](#isArray)
- [`isBoolean()`](#isBoolean)
- [`isDate()`](#isDate)
- [`isFunction()`](#isFunction)
- [`isMap()`](#isMap)
- [`isNumber()`](#isNumber)
- [`isObject()`](#isObject)
- [`isSet()`](#isSet)
- [`isString()`](#isString)

[**Utility:**](#utility)

- [`coalesce()`](#coalesce)
- [`dataGet()`](#dataGet)
- [`dataHas()`](#dataHas)
- [`digitOnly()`](#digitOnly)
- [`isEmpty()`](#isEmpty)
- [`snakeCaseKeys()`](#snakeCaseKeys)

[**Number:**](#number)

- [`formatCurrency()`](#formatCurrency)
- [`formatCurrencyCompact()`](#formatCurrencyCompact)
- [`formatDecimal()`](#formatDecimal)
- [`formatDecimalCompact()`](#formatDecimalCompact)
- [`formatPercent()`](#formatPercent)
- [`formatPercentFrom()`](#formatPercentFrom)
- [`getRatio()`](#getRatio)
- [`parseNumber()`](#parseNumber)
- [`sum()`](#sum)

[**Phone Number:**](#phone-number)

- [`formatPhone`](#formatPhone)
- [`parsePhone`](#parsePhone)

[**Date:**](#date)

- [`formatDate()`](#formatDate)
- [`parseDate()`](#parseDate)
- [`fromNow()`](#fromNow)

[**Social:**](#social)

- [`facebookSearchUrl()`](#facebookSearchUrl)
- [`googleMapsSearchUrl()`](#googleMapsSearchUrl)
- [`googleSearchUrl()`](#googleSearchUrl)

[**Constants:**](#constants)

- [`monthNames`](#monthNames)
- [`shortMonthNames`](#shortMonthNames)

### Type Checking

#### `isArray()`

Check if the given `value` is an array.

```js
isArray(value)
```

```js
import { isArray } from '@risan/helpers';

isArray([]);                // true
isArray(['foo', 'bar']);    // true
isArray([[1, 2], [1, 2]]);  // true

isArray('foo');           // false
isArray({});              // false
isArray(new Set([1, 2])); // false
isArray(new Map());       // false
```

#### `isBoolean()`

Check if the given `value` is a boolean type.

```js
isBoolean(value)
```

```js
import { isBoolean } from '@risan/helpers';

isBoolean(true);    // true
isBoolean(false);   // true

// 1 and 0 are number type.
isBoolean(1);       // false
isBoolean(0);       // false
isBoolean('true');  // false
isBoolean('');      // false
```

#### `isDate()`

Check if the given `value` is a valid `Date` instance.

```js
isDate(value)
```

```js
import { isDate } from '@risan/helpers';

isDate(new Date());                             // true
isDate(new Date(2020, 0, 1));                   // true
isDate(new Date('1970-01-01T00:00:00+00:00'));  // true

// Invalid date returns false.
isDate(new Date('foo'));  // false

isDate('foo');  // false
isDate(12345);  // false
isDate(true);   // false
```

#### `isFunction()`

Check if the given `value` is a `function`.

```js
isFunction(value)
```

```js
import { isFunction } from '@risan/helpers';

isFunction(function () {}); // true
isFunction(() => {});       // true
isFunction(Number.isNaN);   // true

isFunction(123);            // false
isFunction('foo');          // false
isFunction(true);           // false
isFunction(new Set());      // false
isFunction([1, 2]);         // false
isFunction({ foo: 'bar' }); // false
```

#### `isMap()`

Check if the given `value` is a `Map` instance.

```js
isMap(value)
```

```js
import { isMap } from '@risan/helpers';

isMap(new Map()); // true

isMap(123);   // false
isMap('foo'); // false
isMap(true);  // false

// Set, array, and object return false
isMap(new Set());       // false
isMap([1, 2]);          // false
isMap({ foo: 'bar' });  // false
```

#### `isNumber()`

Check if the given `value` is a number.

```js
isNumber(value)
```

```js
import { isNumber } from '@risan/helpers';

isNumber(123);  // true
isNumber(3.14); // true
isNumber(0.0);  // true

isNumber('foo');  // false
isNumber(true);   // false
isNumber([1, 2]); // false

// Number in string type returns false.
isNumber('123'); // false

// NaN and Infinity return false.
isNumber(NaN);      // false
isNumber(Infinity); // false
```

#### `isObject()`

Check if the given `value` is an object.

```js
isObject(value)
```

```js
import { isObject } from '@risan/helpers';

isObject({});                   // true
isObject({ foo: 'bar' });       // true
isObject(Object.create(null));  // true

function Person {};
isObject(new Person()); // true

class Animal {};
isObject(new Animal()); // true

isObject(123);    // false
isObject('foo');  // false
isObject(true);   // false

// null, array, Date, Map, and Set return false.
isObject(null);       // false
isObject([1, 2]);     // false
isObject(new Date()); // false
isObject(new Map());  // false
isObject(new Set());  // false
```

#### `isSet()`

Check if the given `value` is a `Set` instance.

```js
isSet(value)
```

```js
import { isSet } from '@risan/helpers';

isSet(new Set());       // true
isSet(new Set([1, 2])); // true

isSet(123);   // false
isSet('foo'); // false
isSet(true);  // false

// Map, array, and object return false
isSet(new Map());       // false
isSet([1, 2]);          // false
isSet({ foo: 'bar' });  // false
```

#### `isString()`

Check if the given `value` is a string.

```js
isString(value)
```

```js
import { isString } from '@risan/helpers';

isString('foo');  // true
isString('');     // true
isString('  ');   // true

isString(true);           // false
isString(123);            // false
isString(['a', 'b']);     // false
isString({ foo: 'bar' }); // false
```

### Utility

#### `coalesce()`

It returns the `value` itself if it's not empty, or else returns the `fallbackValue`.

```js
coalesce(value, fallbackValue = null)
```

```js
import { coalesce } from '@risan/helpers';

coalesce(null);       // null
coalesce(undefined);  // null
coalesce(NaN);        // null
coalesce('');         // null
coalesce(' ');        // null
coalesce([]);         // null
coalesce({});         // null
coalesce(new Set());  // null
coalesce(new Map());  // null
coalesce(new Date('foo')); // invalid date returns null

// false and 0 won't return null
coalesce(false);  // false
coalesce(0);      // 0

// Set custom fallbackValue
coalesce('', 'empty string'); // empty string
```

#### `dataGet()`

Get the value at `path` of `obj`. If the `path` does not exist or the value is `undefined`, the `fallbackValue` would be returned. It uses Lodash [`get` function](https://lodash.com/docs/4.17.15#get) under the hood.

```js
dataGet(obj, path, fallbackValue = undefined)
```

```js
import { dataGet } from '@risan/helpers';

dataGet({ foo: 'bar' }, 'foo'); // bar
dataGet({ account: { id: 123 } }, 'account.id'); // 123
dataGet([100, 200, 300], '[1]'); // 200
dataGet({ ids: [100, 200, 300] }, 'ids.[1]'); // 200
dataGet([{ id: 100}, { id: 200}], '[1].id'); // 200
dataGet({ foo: null }, 'foo'); // null

// It returns undefined if the path does not exist.
dataGet({ foo: 'bar' }, 'baz'); // undefined

// Set custom fallbackValue.
dataGet({ foo: 'bar' }, 'baz', 'qux');     // qux
dataGet({ foo: undefined }, 'foo', 'qux'); // qux
```

#### `dataHas()`

Check if the given `path` exists on `obj`. It uses Lodash [`has` function](https://lodash.com/docs/4.17.15#has) under the hood.

```js
dataHas(obj, path)
```

```js
import { dataHas } from '@risan/helpers';

dataHas({ foo: 'bar' }, 'foo');                  // true
dataHas({ account: { id: 123 } }, 'account.id'); // true
dataHas([100, 200, 300], '[1]');                 // true
dataHas({ ids: [100, 200, 300] }, 'ids.[1]');    // true
dataHas([{ id: 100}, { id: 200}], '[1].id');     // true
dataHas({ foo: null }, 'foo');                   // true
dataHas({ foo: undefined }, 'foo');              // true

// It returns false if the path does not exist.
dataHas({ foo: 'bar' }, 'baz'); // false
```

#### `digitOnly()`

Retruns a `string` where all non-digit characters are removed from the given `value`. It returns `null` if the given `value` is not `number` or `string` type.

```js
digitOnly(value)
```

```js
import { digitOnly } from '@risan/helpers';

digitOnly('123-456-7890'); // 1234567890
digitOnly('AB123 RTS+45'); // 12345

// Returns an absolute value in string if value is an integer
digitOnly(123);   // 123
digitOnly(-123);  // 123

// Number sign and decimal point are removed from float.
digitOnly(3.14);  // 314
digitOnly(-3.14); // 314

// Returns null if value is neither string nor number.
digitOnly(null);        // null
digitOnly(undefined);   // null
digitOnly([1, 2, 3]);   // null
digitOnly({ id: 12 });  // null
```

#### `isEmpty()`

Check if the given `value` is considered empty.

```js
isEmpty(value)
```

```js
import { isEmpty } from '@risan/helpers';

isEmpty(null);      // true
isEmpty(undefined); // true
isEmpty(NaN);       // true
isEmpty('');        // true
isEmpty([]);        // true
isEmpty({});        // true
isEmpty(new Set()); // true
isEmpty(new Map()); // true

// Empty string returns true.
isEmpty(' '); // true

// Invalid date returns true.
isEmpty(new Date('foo')); // true

isEmpty('foo');           // false
isEmpty(-123);            // false
isEmpty([1, 2, 3]);       // false
isEmpty({ foo: 'bar' });  // false

// false, 0, and Infinity return false.
isEmpty(false);     // false
isEmpty(0);         // false
isEmpty(Infinity);  // false
```

#### `snakeCaseKeys()`

Returns a new object where all its property names are transformed into snake case.

```js
snakeCaseKeys(obj)
```

```js
import { snakeCaseKeys } from '@risan/helpers';

snakeCaseKeys({ userId: 123, FIRST_NAME: 'foo' }); // { user_id: 123, first_name: 'foo' }
```

### Number

#### `formatCurrency()`

Format `value` in currency.

```js
formatCurrency(value, fractionDigits = 2, options = {
  locales: 'en-US',
  currencyCode: 'USD',
})
```

```js
import { formatCurrency } from '@risan/helpers';

formatCurrency(15200);    // $15,200.00
formatCurrency(4000.231); // $4,000.23
formatCurrency('123.4');  // $123.4
formatCurrency('foo');    // null

// Set custom fractionDigits
formatCurrency(4000.281, 0); // $4,000
formatCurrency(4000.281, 1); // $4,000.3
formatCurrency(4000.281, 3); // $4,000.281

// Set currency in Euro
formatCurrency(15200, 2, { currencyCode: 'EUR' }); // €15,200.00

// Remove number grouping
formatCurrency(15200, 2 { useGrouping: false }); // $15200.00
```

#### `formatCurrencyCompact()`

Format `value` in currency with abbreviated suffix (K/M/B).

```js
formatCurrencyCompact(value, fractionDigits = 2, options = {})
```

```js
import { formatCurrencyCompact } from '@risan/helpers';

formatCurrencyCompact(100);         // $100.00
formatCurrencyCompact(1000.0);      // $1.00K
formatCurrencyCompact('1250');      // $1.25K
formatCurrencyCompact(1250000);     // $1.25M
formatCurrencyCompact(1250000000);  // $1.25B
formatCurrencyCompact('foo');       // null

// Set custom fractionDigits
formatCurrencyCompact(1234, 0); // $1K
formatCurrencyCompact(1234, 1); // $1.2K
formatCurrencyCompact(1234, 3); // $1.234K

// Set currency in Euro
formatCurrencyCompact(1250, 2, { currencyCode: 'EUR' }); // €1.25K
```

#### `formatDecimal()`

Format `value` in decimal.

```js
formatDecimal(value, fractionDigits = 2, options = {
  locales: 'en-US',
})
```

```js
import { formatDecimal } from '@risan/helpers';

formatDecimal(15200);    // 15,200.00
formatDecimal(4000.231); // 4,000.23
formatDecimal('123.4');  // 123.4
formatDecimal('foo');    // null

// Set custom fractionDigits
formatDecimal(4000.281, 0); // 4,000
formatDecimal(4000.281, 1); // 4,000.3
formatDecimal(4000.281, 3); // 4,000.281

// Remove number grouping
formatDecimal(15200, 2 { useGrouping: false }); // 15200.00
```

#### `formatDecimalCompact()`

Format `value` in decimal with abbreviated suffix (K/M/B).

```js
formatDecimalCompact(value, fractionDigits = 2, options = {})
```

```js
import { formatDecimalCompact } from '@risan/helpers';

formatDecimalCompact(100);         // 100.00
formatDecimalCompact(1000.0);      // 1.00K
formatDecimalCompact('1250');      // 1.25K
formatDecimalCompact(1250000);     // 1.25M
formatDecimalCompact(1250000000);  // 1.25B
formatDecimalCompact('foo');       // null

// Set custom fractionDigits
formatDecimalCompact(1234, 0); // 1K
formatDecimalCompact(1234, 1); // 1.2K
formatDecimalCompact(1234, 3); // 1.234K
```

#### `formatPercent()`

Format `value` in percentage.

```js
formatPercent(value, fractionDigits = 2)
```

```js
import { formatPercent } from '@risan/helpers';

formatPercent(0.25);    // 25.00%
formatPercent('0.502'); // 50.20%
formatPercent(0);       // 0.00%
formatPercent(1);       // 100.00%
formatPercent('foo');   // null

// Set custom fractionDigits
formatPercent(0.1234, 0); // 12%
formatPercent(0.1234, 1); // 12.3%
formatPercent(0.1234, 3); // 12.340%
```

#### `formatPercentFrom()`

Format `value` in percentage out of the given `total`.

```js
formatPercentFrom(value, total, fractionDigits = 2)
```

```js
import { formatPercentFrom } from '@risan/helpers';

formatPercentFrom(25, 100);     // 25.00%
formatPercentFrom('1', '2.0');  // 50.00%
formatPercentFrom(0.0, 1000);   // 0.00%
formatPercentFrom(200, 200);    // 100.00%
formatPercentFrom('foo', 100);  // null

// Set custom fractionDigits
formatPercentFrom(2.518, 10, 0); // 25%
formatPercentFrom(2.518, 10, 1); // 25.2%
formatPercentFrom(2.518, 10, 3); // 25.180%
```

#### `getRatio()`

Calculate the ratio of `value` out of the given `total`.

```js
getRatio(value, total)
```

```js
import { getRatio } from '@risan/helpers';

getRatio(25, 100);     // 0.25
getRatio('1', '2.0');  // 0.5
getRatio(0.0, 1000);   // 0
getRatio(200, 200);    // 1
getRatio('foo', 100);  // null

// In case of 0 total
getRatio(123, 0);   // 1
getRatio(-123, 0);  // -1
```

#### `parseNumber()`

Parse the given `value` to number type. If `value` can't be parsed to number, `fallbackValue` will be return.

```js
parseNumber(value, fallbackValue = null)
```

```js
import { parseNumber } from '@risan/helpers';

parseNumber(100);   // 100
parseNumber(3.14);  // 3.14

// Parse a string.
parseNumber('100');   // 100
parseNumber('-3.14'); // -3.14

// Parse a boolean value.
parseNumber(true);  // 1
parseNumber(false); // 0

// Date will be parsed to milliseconds since Unix epoch.
parseNumber(new Date('1970-01-01T00:00:00+00:00')); // 0
parseNumber(new Date('1970-01-01T00:00:01+00:00')); // 1000
parseNumber(new Date('1970-01-01T00:01:00+00:00')); // 60000

// Value that can't be parsed returns null.
parseNumber('foo');           // null
parseNumber([1, 2]);          // null
parseNumber({ foo: 'bar' });  // null
parseNumber(new Date('foo')); // null

// Set a custom fallbackValue.
parseNumber('foo', 123);  // 123
parseNumber({}, 'empty'); // empty
parseNumber([], false);   // false
```

#### `sum()`

Calculate the sum of an `array`. If the `items` is an array of object, you may pass the `path` as a second parameter.

```js
sum(items, path = null)
```

```js
import { parseNumber } from '@risan/helpers';

sum([1, 2, 3]); // 6
sum([-1, -2, -3]) // -6
sum([1.25, 2.25, 3.25]); // 6.75

// It can parse number with string type.
sum(['1.25', '2.25', '3.25']); // 6.75

// Calculate array of object.
sum([{ a: 1 }, { a: 2 }, { a: 3 }], 'a'); // 6

// Use dot notation to access deeply nested object.
sum([{ a: { b: 1 } }, { a: { b: 2 } }, { a: { b: 3 } }], 'a.b'); // 6
```

### Phone Number

#### `formatPhone()`

Format the given `value` as a US phone number.

```js
formatPhone(value)
```

It returns `null` if the `value` is empty, not a `string`, or a `number`. If the `value` does not match the US phone number, the `value` itself will be returned.

```js
import { formatPhone } from '@risan/helpers';

// Returns: (222) 333-4444
formatPhone(2223334444);
formatPhone('222 333 4444');
formatPhone('222-333-4444');
formatPhone('222.333.4444');

// Returns: +1 (222) 333-4444
formatPhone(12223334444);
formatPhone('1 222 333 4444');
formatPhone('+1 222 333 4444');
formatPhone('1-222-333-4444');
formatPhone('1.222.333.4444');
formatPhone('1 (222) 333-4444');

// Returns: +1 (222) 333-4444 ext. 777
formatPhone('1 222 333 4444 Ext. 777');
formatPhone('+1 222 333 4444 ext 777');
formatPhone('1-222-333-4444 x777');
formatPhone('1.222.333.4444#777');
formatPhone('1 (222) 333-4444 extension 777');

// Returns the value itself if does not match the pattern.
formatPhone(222); // 222
formatPhone('222-6666'); // 222-6666

// Returns null if empty, not a string, or not a number.
formatPhone('');             // null
formatPhone(undefined);      // null
formatPhone([1, 2]);         // null
formatPhone({ foo: 'bar' }); // null
```

#### `parsePhone()`

Parse the given `value` as a US phone number.

```js
parsePhone(value)
```

It returns `null` if the `value` is empty, not a `string`, or a `number`. If the `value` does not match the US phone number, the `value` itself will be returned. On success returns an `object` with the following structure:

```js
{
  countryCode: String|null,
  areaCode: String,
  centralOfficeCode: String,
  lineNumber: String,
  extension: String|null,
}
```

```js
import { parsePhone } from '@risan/helpers';

// {
//   countryCode: null,
//   areaCode: '222',
//   centralOfficeCode: '333',
//   lineNumber: '4444',
//   extension: null
// }
parsePhone(2223334444);
parsePhone('222 333 4444');
parsePhone('222-333-4444');
parsePhone('222.333.4444');
parsePhone('(222) 333-4444');

// With country code prefix.
// {
//   countryCode: '+1',
//   areaCode: '222',
//   centralOfficeCode: '333',
//   lineNumber: '4444',
//   extension: null
// }
parsePhone(12223334444);
parsePhone('1 222 333 4444');
parsePhone('+1 222 333 4444');
parsePhone('1-222-333-4444');
parsePhone('1.222.333.4444');
parsePhone('1 (222) 333-4444');
parsePhone('+1 (222) 333-4444');

// With extension number
// {
//   countryCode: '+1',
//   areaCode: '222',
//   centralOfficeCode: '333',
//   lineNumber: '4444',
//   extension: '777'
// }
parsePhone('1 222 333 4444 Ext. 777');
parsePhone('+1 222 333 4444 ext 777');
parsePhone('1-222-333-4444 x777');
parsePhone('1.222.333.4444#777');
parsePhone('1 (222) 333-4444 extension 777');
parsePhone('+1 (222) 333-4444 ext. 777');

// Returns the value itself if does not match the pattern.
parsePhone(222); // 222
parsePhone('222-6666'); // 222-6666

// Returns null if empty, not a string, or not a number.
parsePhone('');             // null
parsePhone(undefined);      // null
parsePhone([1, 2]);         // null
parsePhone({ foo: 'bar' }); // null
```

### Date

#### `getCurrentYear()`

Get the current year.

```js
getCurrentYear()
```

```js
import { getCurrentYear } from '@risan/helpers';

getCurrentYear() === (new Date()).getFullYear(); // true
```

#### `formatDate()`

Format the given `value` as a date. You can also pass the optional `outputPattern` and `inputPattern` (see `date-fns`'s [format string pattern](https://date-fns.org/v2.9.0/docs/format)). Also check the [Automatic Datetime Pattern Recognition](#automatic-datetime-pattern-recognition) section to see all possible patterns that can be recognized automatically.

```js
formatDate(value, outputPattern = 'MM/dd/yyyy', inputPattern = null)
```

```js
import { formatDate } from '@risan/helpers';

// Format a Date instance.
formatDate(new Date(2020, 7, 31)); // 08/31/2020

// Numbers will be parsed as milliseconds since Unix epoch.
formatDate(0);               // 01/01/1970
formatDate(1598837415250.0); // 08/31/2020

// Automatic datetime pattern recognition, see parseDate()
formatDate('2020-08-31');                 // 08/31/2020
formatDate('2020-08-31T08:15:30');        // 08/31/2020
formatDate('2020-08-31T08:15:30.250');    // 08/31/2020
formatDate('2020-08-31T08:15:30+02:00');  // 08/31/2020

formatDate('2020-08-31 08:15:30');        // 08/31/2020
formatDate('2020-08-31 08:15:30.250');    // 08/31/2020

formatDate('/Date(1598837415250)/');      // 08/31/2020
formatDate('/Date(1598837415250+0200)/'); // 08/31/2020

// Set a custom output pattern.
formatDate('2020-08-31T08:15:30.250', 'dd-MM-yyyy');        // 31-08-2020
formatDate('2020-08-31T08:15:30.250', 'MM/dd/yyyy h:mm a'); // 08/31/2020 8:15 AM

// Set a custom input pattern.
formatDate('20200831', 'MM/dd/yyyy', 'yyyyMMdd'); // 08/31/2020
formatDate('08/31/2020 8:15 AM', 'yyyy-MM-dd HH:mm:ss', 'MM/dd/yyyy h:mm a'); // 2020-08-31 08:15:00
```

#### `parseDate()`

Parse the given `value` to `Date` instance. You can also pass the optional `pattern` (see `date-fns`'s [format string pattern](https://date-fns.org/v2.9.0/docs/parse)). Note that if the `value` is a `number` type, it will be treated as milliseconds since the Unix epoch and the `pattern` parameter would be ignored completely.

```js
parseDate(value, pattern = null)
```

#### Automatic Datetime Pattern Recognition

If you don't pass the `pattern` parameter, it will try to guess the value's pattern. Here's the list of all patterns that can be recognized automatically:

* `yyyy-MM-dd`: `2020-01-31`
* `yyyy-MM-dd'T'hh:mm:ss`: `2020-01-31T08:15:30`
* `yyyy-MM-dd'T'hh:mm:ss.SSS`: `2020-01-31T08:15:30.250`
* `yyyy-MM-dd'T'hh:mm:ss.SSSZ`: `2020-01-31T08:15:30.250Z`
* `yyyy-MM-dd'T'hh:mm:ssxxx`: `2020-01-31T08:15:30+02:00`
* `yyyy-MM-dd'T'hh:mm:ss.SSSxxx`: `2020-01-31T08:15:30.250+02:00`
* `yyyy-MM-dd HH:mm:ss`: `2020-01-31 08:15:30`
* `yyyy-MM-dd HH:mm:ss.SSS`: `2020-01-31 08:15:30.250`
* .Net datetime JSON: `/Date(1580458530250)/`, `/Date(1580458530250+0200)/`

```js
import { parseDate } from '@risan/helpers';

// Returns the given date value.
parseDate(new Date());
parseDate(new Date(2020, 0, 31));

// Number will be parsed as a milliseconds since Unix epoch.
parseDate(1580458530250); // new Date(1580458530250)
parseDate(0);             // new Date(0)
parseDate(0.0);           // new Date(0)

// It can parse several ISO 8601 formats.
parseDate('2020-08-31');                    // new Date(2020, 7, 31)
parseDate('2020-08-31T08:15:30');           // new Date(2020, 7, 31, 8, 15, 30)
parseDate('2020-08-31T08:15:30.250');       // new Date(2020, 7, 31, 8, 15, 30, 250)
parseDate('2020-08-31T08:15:30.250Z');      // new Date(Date.UTC(2020, 7, 31, 8, 15, 30, 250))
parseDate('2020-08-31T08:15:30+02:00');     // new Date(Date.UTC(2020, 7, 31, 6, 15, 30))
parseDate('2020-08-31T08:15:30-02:00');     // new Date(Date.UTC(2020, 7, 31, 10, 15, 30))
parseDate('2020-08-31T08:15:30.250-02:00'); // new Date(Date.UTC(2020, 7, 31, 10, 15, 30, 250))

// Parse SQL datetime format.
parseDate('2020-08-31 08:15:30'); // new Date(2020, 7, 31, 8, 15, 30)
parseDate('2020-08-31 08:15:30.250'); // new Date(2020, 7, 31, 8, 15, 30, 250)

// Parse .Net JSON datetime format.
parseDate('/Date(1580458530250)/');      // new Date(1580458530250)
parseDate('/Date(1580458530250-0700)/'); // new Date(1580458530250)

// Set a custom pattern.
parseDate('08_31_2020', 'MM_dd_yyyy'); // new Date(2020, 7, 31));
parseDate('20200831 08.15.30', 'yyyyMMdd HH.mm.ss'); // new Date(2020, 7, 31, 8, 15, 30)

// Returns null if the value is empty or invalid.
parseDate(null);                        // null
parseDate('foo');                       // null
parseDate('2020-08-32');                // null
parseDate('08_32_2020', 'MM_dd_yyyy');  // null
```

#### `fromNow()`

Get the relative distance between the given `value` and now. You may pass the optional `pattern` parameter that will be used to parse the given `value` (see `date-fns`'s [format string pattern](https://date-fns.org/v2.9.0/docs/parse)). Also check the [Automatic Datetime Pattern Recognition](#automatic-datetime-pattern-recognition) section to see all possible patterns that can be recognized automatically.

```js
fromNow(value, pattern = null)
```

```js
import { fromNow } from '@risan/helpers';

fromNow(new Date(Date.now() - 2 * 60 * 1000)); // 2 minutes ago
fromNow(new Date(Date.now() + 2 * 60 * 1000)); // in 2 minutes
fromNow(new Date(Date.now() - 5 * 60 * 60 * 1000)); // about 5 hours ago
fromNow(new Date(Date.now() + 5 * 60 * 60 * 1000)); // in about 5 hours

// Automatic datetime pattern recognition, see parseDate()
fromNow('2020-08-31T08:15:30');
fromNow('2020-08-31T08:15:30+02:00');
fromNow('2020-08-31 08:15:30');
fromNow('/Date(1580458530250-0700)/');

// Pass a custom pattern.
fromNow('20200831 08.15.30', 'yyyyMMdd HH.mm.ss');

// Returns null if the value is empty or invalid.
fromNow(null);                        // null
fromNow('foo');                       // null
fromNow('2020-08-32');                // null
fromNow('08_32_2020', 'MM_dd_yyyy');  // null
```

### Social

#### `facebookSearchUrl()`

Generate a Facebook search URL for the given `query`.

```js
facebookSearchUrl(query)
```

```js
import { facebookSearchUrl } from '@risan/helpers';

facebookSearchUrl('foo'); // https://www.facebook.com/search?q=foo
facebookSearchUrl('foo bar'); // https://www.facebook.com/search?q=foo%20bar
```

#### `googleMapsSearchUrl()`

Generate a Google Maps search URL for the given `query`.

```js
googleMapsSearchUrl(query)
```

```js
import { googleMapsSearchUrl } from '@risan/helpers';

googleMapsSearchUrl('foo'); // https://www.google.com/maps/search/foo
googleMapsSearchUrl('foo bar'); // https://www.google.com/maps/search/foo%20bar
```

#### `googleSearchUrl()`

Generate a Google search URL for the given `query`.

```js
googleSearchUrl(query)
```

```js
import { googleSearchUrl } from '@risan/helpers';

googleSearchUrl('foo'); // https://www.google.com/search?q=foo
googleSearchUrl('foo bar'); // https://www.google.com/search?q=foo%20bar
```

### Constants

#### `monthNames`

Array of month names in english.

```js
import { monthNames } from '@risan/helpers';

console.log(monthNames); // ["January", "February", ... "December"]
```

#### `shortMonthNames`

Array of short month names in english.

```js
import { shortMonthNames } from '@risan/helpers';

console.log(shortMonthNames); // ["Jan", "Feb", ... "Dec"]
```
