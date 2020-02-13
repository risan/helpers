import dataGet from './dataGet';
import parseNumber from './parseNumber';

export default (items, path = null) =>
  items.reduce((total, item) => {
    const value = path ? dataGet(item, path, 0) : item;

    return total + parseNumber(value, 0);
  }, 0);
