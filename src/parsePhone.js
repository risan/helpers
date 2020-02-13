import isArray from './isArray';
import isEmpty from './isEmpty';
import isNumber from './isNumber';
import isString from './isString';

export default value => {
  const valueParsed = isNumber(value) ? `${value}` : value;

  if (!isString(valueParsed) || isEmpty(valueParsed)) {
    return null;
  }

  const phonePattern = /^(\+?1[\s-.]?)?\(?(\d{3})\)?[\s-.]?(\d{3})[\s-.]?(\d{4})(\s?(x|ext|ext.|extension|#)\s?(\d+))?/gi;

  const matched = phonePattern.exec(valueParsed);

  return isArray(matched)
    ? {
        countryCode: matched[1] ? '+1' : null,
        areaCode: matched[2],
        centralOfficeCode: matched[3],
        lineNumber: matched[4],
        extension: matched[7] ? matched[7] : null,
      }
    : valueParsed;
};
