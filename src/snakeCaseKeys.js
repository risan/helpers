import mapKeys from 'lodash/mapKeys';
import snakeCase from 'lodash/snakeCase';

export default obj => mapKeys(obj, (value, key) => snakeCase(key));
