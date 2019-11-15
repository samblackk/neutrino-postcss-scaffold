module.exports = {
  root: true,
  extends: 'eslint-config-airbnb',
  parser: 'babel-eslint',
  env: {
    'browser': true,
    'node': true,
    'es6': true,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['src', './src'],
          ['views', './src/views'],
          ['components', './src/components'],
          ['styles', './src/styles'],
        ],
        extensions: ['.js', '.jsx', '.json']
      }
    }
  },
  rules: {}
};
