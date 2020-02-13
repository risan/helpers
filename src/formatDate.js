import dateFnsFormat from 'date-fns/format';
import parseDate from './parseDate';

export default (value, outputPattern = 'MM/dd/yyyy', inputPattern = null) => {
  const valueParsed = parseDate(value, inputPattern);

  if (valueParsed === null) {
    return null;
  }

  return dateFnsFormat(valueParsed, outputPattern);
};
