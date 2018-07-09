'use strict'
const path = require('path')
const webpack = require('webpack')

const devtoolModuleFilenameTemplate = ({resourcePath}) => {
  if (resourcePath.indexOf('node_modules') >= 0) {
    resourcePath = resourcePath.substr(resourcePath.indexOf('node_modules'))
  }
  return `demo/${resourcePath}`
}
module.exports = (env, argv) => {
  const production = argv.mode === 'production'
  return {
    entry: {
      app: ['babel-polyfill', './src/main.js']
    },
    output: {
      path: path.resolve(__dirname, './assets'),
      filename: '[name].js',
      publicPath: './',
      devtoolModuleFilenameTemplate,
      devtoolFallbackModuleFilenameTemplate: devtoolModuleFilenameTemplate
    },
    externals: {
      'cheetah-grid': 'cheetahGrid'
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          enforce: 'pre',
          include: [path.resolve(__dirname, 'src')],
          options: {
            formatter: require('eslint-friendly-formatter')
          }
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
            presets: ['babel-preset-es2015', 'babel-preset-stage-2'].map(require.resolve),
            comments: true
          },
          include: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, '../vue-cheetah-grid')
          ]
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin(production ? {
        'process.env': {
          NODE_ENV: '"production"'
        }
      } : {})
    ],
    devtool: production ? undefined : '#source-map'
  }
}
