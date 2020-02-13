import dateFnsParse from 'date-fns/parse';
import dateFnsParseISO from 'date-fns/parseISO';
import isArray from './isArray';
import isDate from './isDate';
import isEmpty from './isEmpty';
import isNumber from './isNumber';
import isString from './isString';

export default (value, pattern = null) => {
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
