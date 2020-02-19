const path = require('path');
// const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const modeConfiguration = (env) => require(`./webpack.${env}`)(env);

module.exports = ({ mode } = { mode: 'production' }) => webpackMerge({
  mode,
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: [
            ['import', { libraryName: 'antd', style: true }],
          ],
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
  },
  plugins: [
    new AntdDayjsWebpackPlugin(),
  ],
}, modeConfiguration(mode));
