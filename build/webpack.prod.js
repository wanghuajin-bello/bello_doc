
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base')

process.env.NODE_ENV = 'production'

module.exports = merge(webpackBaseConfig, {
  devtool: "source-map",
  mode: "production",
  entry: {
    main: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../lib'),
    publicPath: "/lib/",
    filename: 'bello-ui.min.js',
    library: 'bello-ui',
    libraryTarget: 'amd',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd:'vue'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ]
})
