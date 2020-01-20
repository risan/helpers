import { terser } from 'rollup-plugin-terser';

module.exports = {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/helpers.esm.js',
      format: 'esm',
    },
    {
      file: 'dist/helpers.cjs.js',
      format: 'cjs',
    },
    {
      name: 'helpers',
      file: 'dist/helpers.js',
      format: 'iife',
    },
    {
      name: 'helpers',
      file: 'dist/helpers.min.js',
      format: 'iife',
      plugins: [terser()],
    },
  ],
};
