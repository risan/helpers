import parseNumber from './parseNumber';

export default value => {
  const valueParsed = parseNumber(value);

  if (valueParsed === null) {
    return { value: null, symbol: null };
  }

  const groups = [
    { divider: 1, symbol: '' },
    { divider: 1e3, symbol: 'K' },
    { divider: 1e6, symbol: 'M' },
    { divider: 1e9, symbol: 'B' },
  ];

  const matchedGroup = groups.reduce((matched, group) => {
    if (Math.abs(valueParsed) >= group.divider) {
      return group;
    }

    return matched;
  }, groups[0]);

  const valueCompact = valueParsed / matchedGroup.divider;

  return { value: valueCompact, symbol: matchedGroup.symbol };
};
