import parseNumber from './parseNumber';

export default (
  value,
  fractionDigits = 2,
  { locales = 'en-US', ...options } = {}
) => {
  const valueParsed = parseNumber(value);

  if (valueParsed === null) {
    return null;
  }

  return new Intl.NumberFormat(locales, {
    style: 'decimal',
    maximumFractionDigits: fractionDigits,
    minimumFractionDigits: fractionDigits,
    ...options,
  }).format(valueParsed);
};
