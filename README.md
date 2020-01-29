# Helpers

## API

- [`coalesce()`](#coalesce)
- [`formatCurrency()`](#formatCurrency)
- [`formatCurrencyCompact()`](#formatCurrencyCompact)
- [`formatDecimal()`](#formatDecimal)
- [`formatDecimalCompact()`](#formatDecimalCompact)
- [`formatPercent()`](#formatPercent)
- [`formatPercentFrom()`](#formatPercentFrom)
- [`getRatio()`](#getRatio)

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
