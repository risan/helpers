import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
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
      file: 'dist/helpers.umd.js',
      format: 'umd',
    },
    {
      name: 'helpers',
      file: 'dist/helpers.umd.min.js',
      format: 'umd',
      plugins: [terser()],
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
