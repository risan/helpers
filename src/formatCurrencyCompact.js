import formatCurrency from './formatCurrency';
import parseNumberCompact from './parseNumberCompact';

export default (value, fractionDigits = 2, options = {}) => {
  const { value: valueCompact, symbol } = parseNumberCompact(value);

  if (valueCompact === null) {
    return null;
  }

  return formatCurrency(valueCompact, fractionDigits, options) + symbol;
};
