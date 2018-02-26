import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import multiEntry from 'rollup-plugin-multi-entry'

export default {
  input: 'test/y-text.tests.js',
  name: 'y-tests',
  sourcemap: true,
  output: {
    file: 'y.test.js',
    format: 'umd'
  },
  plugins: [
    multiEntry(),
    nodeResolve({
      main: true,
      module: true,
      browser: true
    }),
    commonjs()
  ]
}
