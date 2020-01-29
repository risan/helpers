# Helpers

## API

- [`coalesce()`](#coalesce)
- [`formatCurrency()`](#formatCurrency)
- [`formatCurrencyCompact()`](#formatCurrencyCompact)
- [`formatPercent()`](#formatPercent)

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
formatCurrency('');       // null

// Set custom fractionDigits
formatCurrency(4000.231, 0); // $4,000
formatCurrency(4000.231, 3); // $4,000.231

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
