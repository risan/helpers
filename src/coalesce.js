import isEmpty from './isEmpty';

export default (value, fallbackValue = null) =>
  isEmpty(value) ? fallbackValue : value;
