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
