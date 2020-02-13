import isBoolean from './isBoolean';
import isDate from './isDate';
import isEmpty from './isEmpty';
import isNumber from './isNumber';

export default (value, fallbackValue = null) => {
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
