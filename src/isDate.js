export default value =>
  value instanceof Date && value.toString() !== 'Invalid Date';
