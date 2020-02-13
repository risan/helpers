import isArray from './isArray';
import isSet from './isSet';
import isMap from './isMap';

export default value => {
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
