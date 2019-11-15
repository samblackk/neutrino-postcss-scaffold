const { resolve } = require('path');
const airbnb = require('@neutrinojs/airbnb');
const react = require('@neutrinojs/react');
const styleMinify = require('@neutrinojs/style-minify');
const htmlTemplate = require('@neutrinojs/html-template');
const copy = require('@neutrinojs/copy');

// Production Env Check
const prod = process.env.NODE_ENV === 'production';

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    (neutrino) => {
      // Alias's for internal modules
      neutrino.config.resolve.alias.set('src', resolve(__dirname, 'src'));
      neutrino.config.resolve.alias.set('views', resolve(__dirname, 'src/views'));
      neutrino.config.resolve.alias.set('components', resolve(__dirname, 'src/components'));
      neutrino.config.resolve.alias.set('styles', resolve(__dirname, 'src/styles'));
    },
    airbnb({
      eslint: {
        useEslintrc: true,
      },
    }),
    styleMinify(),
    react({
      env: {},
      style: {
        loaders: [
          {
            loader: require.resolve('postcss-loader'),
            useId: 'postcss'
          }
        ]
      }
    }),
    htmlTemplate({
      title: 'Neutrino v9 Scaffold by Sam Black',
      lang: 'en',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
      favicon: 'favicon.ico',
      minify: prod,
      hash: prod,
      cache: prod,
      showErrors: !prod,
    }),
    copy({
      patterns: [
        { from: './_redirects', to: '.' }, // Can remove if not serving on Netlify
      ],
    }),
  ],
};
