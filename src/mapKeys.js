import mapKeys from 'lodash/mapKeys';

export default (obj, callback) =>
  mapKeys(obj, (value, key) => callback(key, value));
