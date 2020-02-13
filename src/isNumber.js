export default value =>
  typeof value === 'number' && !Number.isNaN(value) && Number.isFinite(value);
