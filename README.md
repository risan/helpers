# Helpers

## API

- [`coalesce()`](#coalesce)
- [`formatCurrency()`](#formatCurrency)

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
