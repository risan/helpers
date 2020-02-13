import parseNumber from './parseNumber';

export default (
  value,
  fractionDigits = 2,
  { locales = 'en-US', currencyCode = 'USD', ...options } = {}
) => {
  const valueParsed = parseNumber(value);

  if (valueParsed === null) {
    return null;
  }

  return new Intl.NumberFormat(locales, {
    style: 'currency',
    currency: currencyCode,
    maximumFractionDigits: fractionDigits,
    minimumFractionDigits: fractionDigits,
    ...options,
  }).format(valueParsed);
};
