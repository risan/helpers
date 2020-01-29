# Helpers

## API

- [coalesce](#coalesce)
- [formatCurrency](#formatCurrency)

### `coalesce(value, fallbackValue = null)`

It returns the `value` itself if it's not empty, or else returns the `fallbackValue`.

```js
import { coalesce } from '@risan/helpers';

coalesce(null);       // null
coalesce(undefined);  // null
coalesce(NaN);        // null
coalesce('');         // null
coalesce(' ');        // null
coalesce([]);         // null
coalesce({});         // null

// Set custom fallbackValue
coalesce('', 'empty string'); // empty string
```

### `formatCurrency(value, fractionDigits = 2, options)`

Format `value` into a currency.

```js
import { formatCurrency } from '@risan/helpers';

formatCurrency(15200); // $15,200.00
formatCurrency(4000.231); // $4,000.23
formatCurrency('123.4'); // $123.4
formatCurrency(''); // null

// Set custom fractionDigits
formatCurrency(4000.231, 0); // $4,000
formatCurrency(4000.231, 3); // $4,000.231

// Set currency in Euro
formatCurrency(15200, 2, { currencyCode: 'EUR' }); // €15,200.00

// Remove number grouping
formatCurrency(15200, 2 { useGrouping: false }); // $15200.00
```
