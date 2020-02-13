import isNumber from './isNumber';
import isString from './isString';

export default value => {
  const valueParsed = isNumber(value) ? `${value}` : value;

  if (!isString(valueParsed)) {
    return null;
  }

  return valueParsed.replace(/\D/g, '');
};
