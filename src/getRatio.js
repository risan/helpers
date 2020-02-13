import parseNumber from './parseNumber';

export default (value, total) => {
  const valueParsed = parseNumber(value);

  if (valueParsed === null) {
    return null;
  }

  const totalParsed = parseNumber(total, 0);

  if (totalParsed === 0) {
    if (valueParsed === 0) {
      return 0;
    }

    return valueParsed > 0 ? 1 : -1;
  }

  return valueParsed / totalParsed;
};
