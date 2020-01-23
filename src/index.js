import isPlainObject from 'lodash/isPlainObject';

export const isArray = val => Array.isArray(val);

export const isBoolean = val => typeof val === 'boolean';

export const isString = val => typeof val === 'string';

export const isNumber = val =>
  typeof val === 'number' && !Number.isNaN(val) && Number.isFinite(val);

export const isDate = val =>
  val instanceof Date && val.toString() !== 'Invalid Date';

export const isMap = val => val instanceof Map;

export const isSet = val => val instanceof Set;

export const isObject = val => {
  if (
    val === null ||
    isArray(val) ||
    val instanceof Date ||
    isSet(val) ||
    isMap(val)
  ) {
    return false;
  }

  return typeof val === 'object';
};

export const isEmpty = val => {
  if (val === undefined || val === null || Number.isNaN(val)) {
    return true;
  }

  if (isBoolean(val) || isNumber(val)) {
    return false;
  }

  if (isString(val)) {
    return val.trim().length === 0;
  }

  if (isArray(val)) {
    return val.length === 0;
  }

  if (isSet(val) || isMap(val)) {
    return val.size === 0;
  }

  if (val instanceof Date) {
    return !isDate(val);
  }

  if (isPlainObject(val)) {
    return Object.keys(val).length === 0;
  }

  return false;
};
