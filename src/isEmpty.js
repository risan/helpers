import isPlainObject from 'lodash/isPlainObject';
import isArray from './isArray';
import isBoolean from './isBoolean';
import isDate from './isDate';
import isMap from './isMap';
import isNumber from './isNumber';
import isSet from './isSet';
import isString from './isString';

export default value => {
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
