import formatPercent from './formatPercent';
import getRatio from './getRatio';

export default (value, total, fractionDigits = 2) => {
  const ratio = getRatio(value, total);

  return formatPercent(ratio, fractionDigits);
};
