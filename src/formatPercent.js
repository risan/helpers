import formatDecimal from './formatDecimal';
import parseNumber from './parseNumber';

export default (value, fractionDigits = 2) => {
  const valueParsed = parseNumber(value);

  if (valueParsed === null) {
    return null;
  }

  const percent = valueParsed * 100;

  return `${formatDecimal(percent, fractionDigits)}%`;
};
