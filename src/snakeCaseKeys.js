import snakeCase from 'lodash/snakeCase';
import mapKeys from './mapKeys';

export default obj => mapKeys(obj, key => snakeCase(key));
