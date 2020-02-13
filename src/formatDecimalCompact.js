import formatDecimal from './formatDecimal';
import parseNumberCompact from './parseNumberCompact';

export default (value, fractionDigits = 2, options = {}) => {
  const { value: valueCompact, symbol } = parseNumberCompact(value);

  if (valueCompact === null) {
    return null;
  }

  return formatDecimal(valueCompact, fractionDigits, options) + symbol;
};
