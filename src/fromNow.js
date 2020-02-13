import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import parseDate from './parseDate';

export default (value, pattern = null) => {
  const valueParsed = parseDate(value, pattern);

  if (valueParsed === null) {
    return null;
  }

  return formatDistanceToNow(valueParsed, { addSuffix: true });
};
