import isPlainObject from 'lodash/isPlainObject';
import mapKeys from 'lodash/mapKeys';
import snakeCase from 'lodash/snakeCase';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import dateFnsParseISO from 'date-fns/parseISO';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

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

export const coalesce = (value, fallbackValue = null) =>
  isEmpty(value) ? fallbackValue : value;

export const snakeCaseKeys = obj =>
  mapKeys(obj, (value, key) => snakeCase(key));

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

export const formatCurrencyCompact = (
  value,
  fractionDigits = 2,
  options = {}
) => {
  const { value: valueCompact, symbol } = parseNumberCompact(value);

  if (valueCompact === null) {
    return null;
  }

  return formatCurrency(valueCompact, fractionDigits, options) + symbol;
};

export const formatPercent = (value, fractionDigits = 2) => {
  const valueParsed = parseNumber(value);

  if (valueParsed === null) {
    return null;
  }

  const percent = valueParsed * 100;

  return `${formatDecimal(percent, fractionDigits)}%`;
};

export const getRatio = (value, total) => {
  const valueParsed = parseNumber(value);

  if (valueParsed === null) {
    return null;
  }

  const totalParsed = parseNumber(total, 0);

  if (totalParsed === 0) {
    if (valueParsed === 0) {
      return 0;
    }

    return valueParsed > 0 ? 1 : -1;
  }

  return valueParsed / totalParsed;
};

export const formatPercentFrom = (value, total, fractionDigits = 2) => {
  const ratio = getRatio(value, total);

  return formatPercent(ratio, fractionDigits);
};

export const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const SHORT_MONTH_NAMES = MONTH_NAMES.map(m => m.substring(0, 3));

export const getCurrentYear = () => new Date().getFullYear();

export const parseDate = (value, pattern = null) => {
  if (isDate(value)) {
    return value;
  }

  if (isEmpty(value)) {
    return null;
  }

  if (isNumber(value)) {
    return new Date(value);
  }

  if (!isString(value)) {
    return null;
  }

  if (isString(pattern) && !isEmpty(pattern)) {
    const date = dateFnsParse(value, pattern, new Date());

    return isDate(date) ? date : null;
  }

  const isoDate = /^(\d{4}-\d{2}-\d{2})((T\d{2}:\d{2}:\d{2})(.\d+Z?)?([+-]\d{2}:\d{2})?)?$/;

  if (isoDate.test(value)) {
    const date = dateFnsParseISO(value);

    return isDate(date) ? date : null;
  }

  const sqlDate = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;

  if (sqlDate.test(value)) {
    const date = dateFnsParse(value, 'yyyy-MM-dd HH:mm:ss', new Date());

    return isDate(date) ? date : null;
  }

  const sqlDateWithMs = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}.\d+$/;

  if (sqlDateWithMs.test(value)) {
    const date = dateFnsParse(value, 'yyyy-MM-dd HH:mm:ss.SSS', new Date());

    return isDate(date) ? date : null;
  }

  const dotnetDate = /^\/Date\((\d+)([+-]\d{4})?\)\/$/;

  const matches = value.match(dotnetDate);

  if (isArray(matches) && matches.length === 3) {
    return new Date(parseInt(matches[1], 10));
  }

  return null;
};

export const formatDate = (
  value,
  outputPattern = 'MM/dd/yyyy',
  inputPattern = null
) => {
  const valueParsed = parseDate(value, inputPattern);

  if (valueParsed === null) {
    return null;
  }

  return dateFnsFormat(valueParsed, outputPattern);
};

export const fromNow = (value, pattern = null) => {
  const valueParsed = parseDate(value, pattern);

  if (valueParsed === null) {
    return null;
  }

  return formatDistanceToNow(valueParsed, { addSuffix: true });
};
