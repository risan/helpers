import mapKeys from './mapKeys';

export default obj => mapKeys(obj, key => key.toLowerCase());
