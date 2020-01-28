import isPlainObject from 'lodash/isPlainObject';

export const isArray = value => Array.isArray(value);

export const isBoolean = value => typeof value === 'boolean';

export const isString = value => typeof value === 'string';

export const isNumber = value =>
  typeof value === 'number' && !Number.isNaN(value) && Number.isFinite(value);

export const isDate = value =>
  value instanceof Date && value.toString() !== 'Invalid Date';

export const isMap = value => value instanceof Map;

export const isSet = value => value instanceof Set;

export const isObject = value => {
  if (
    value === null ||
    isArray(value) ||
    value instanceof Date ||
    isSet(value) ||
    isMap(value)
  ) {
    return false;
  }

  return typeof value === 'object';
};

export const isEmpty = value => {
  if (value === undefined || value === null || Number.isNaN(value)) {
    return true;
  }

  if (isBoolean(value) || isNumber(value)) {
    return false;
  }

  if (isString(value)) {
    return value.trim().length === 0;
  }

  if (isArray(value)) {
    return value.length === 0;
  }

  if (isSet(value) || isMap(value)) {
    return value.size === 0;
  }

  if (value instanceof Date) {
    return !isDate(value);
  }

  if (isPlainObject(value)) {
    return Object.keys(value).length === 0;
  }

  return false;
};

export const parseNumber = (value, fallbackValue = null) => {
  if (isEmpty(value)) {
    return fallbackValue;
  }

  if (isBoolean(value)) {
    return value === true ? 1 : 0;
  }

  if (isDate(value)) {
    return value.getTime();
  }

  const valueParsed = isNumber(value) ? value : parseFloat(value, 10);

  return Number.isNaN(valueParsed) ? fallbackValue : valueParsed;
};

export const formatDecimal = (
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

const parseNumberCompact = value => {
  const valueParsed = parseNumber(value);

  if (valueParsed === null) {
    return { value: null, symbol: null };
  }

  const groups = [
    { divider: 1, symbol: '' },
    { divider: 1e3, symbol: 'K' },
    { divider: 1e6, symbol: 'M' },
    { divider: 1e9, symbol: 'B' },
  ];

  const matchedGroup = groups.reduce((matched, group) => {
    if (Math.abs(valueParsed) >= group.divider) {
      return group;
    }

    return matched;
  }, groups[0]);

  const valueCompact = valueParsed / matchedGroup.divider;

  return { value: valueCompact, symbol: matchedGroup.symbol };
};

export const formatDecimalCompact = (
  value,
  fractionDigits = 2,
  options = {}
) => {
  const { value: valueCompact, symbol } = parseNumberCompact(value);

  if (valueCompact === null) {
    return null;
  }

  return formatDecimal(valueCompact, fractionDigits, options) + symbol;
};

export const formatCurrency = (
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
