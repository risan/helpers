# Helpers

## API

- [`coalesce()`](#coalesce)
- [`isArray()`](#isArray)
- [`isBoolean()`](#isBoolean)
- [`isDate()`](#isDate)
- [`isEmpty()`](#isEmpty)
- [`isMap()`](#isMap)
- [`isNumber()`](#isNumber)
- [`isObject()`](#isObject)
- [`isSet()`](#isSet)
- [`isString()`](#isString)

**Numbers:**

- [`formatCurrency()`](#formatCurrency)
- [`formatCurrencyCompact()`](#formatCurrencyCompact)
- [`formatDecimal()`](#formatDecimal)
- [`formatDecimalCompact()`](#formatDecimalCompact)
- [`formatPercent()`](#formatPercent)
- [`formatPercentFrom()`](#formatPercentFrom)
- [`getRatio()`](#getRatio)
- [`parseNumber()`](#parseNumber)

### `coalesce()`

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

### `isArray()`

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

### `isBoolean()`

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

### `isDate()`

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

### `isEmpty()`

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

### `isMap()`

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

### `isNumber()`

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

### `isObject()`

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

### `isSet()`

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

### `isString()`

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

### `formatCurrency()`

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

### `formatCurrencyCompact()`

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

### `formatDecimal()`

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

### `formatDecimalCompact()`

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

### `formatPercent()`

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

### `formatPercentFrom()`

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

### `getRatio()`

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

### `parseNumber()`

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
