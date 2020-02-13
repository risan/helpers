import isObject from './isObject';
import parsePhone from './parsePhone';

export default value => {
  const phone = parsePhone(value);

  if (!isObject(phone)) {
    return phone;
  }

  const prefix = phone.countryCode ? '+1 ' : '';
  const subscriberNumber = `(${phone.areaCode}) ${phone.centralOfficeCode}-${phone.lineNumber}`;
  const extension = phone.extension ? ` ext. ${phone.extension}` : '';

  return `${prefix}${subscriberNumber}${extension}`;
};
