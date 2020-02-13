import get from 'lodash/get';

export default (obj, path, fallbackValue = undefined) =>
  get(obj, path, fallbackValue);
