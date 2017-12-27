/**
 * @Author: GVEDAS <GVEDAS>
 * @Date:   2017-12-23T15:29:57+05:30
 * @Email:  gvedas@gvedas.com
 * @Last modified by:   GVEDAS
 * @Last modified time: 2017-12-27T12:41:16+05:30
 */

const path = require('path');

const config = {
  entry: './web/index.js',
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, 'web-build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    inline: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    host: '172.25.10.159',
    port: 8087,
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'sass-loader',
        }],
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.ico|\.svg$|\.woff$|\.ttf$|\.woff$|\.woff2$|\.eot$|.mp4$/,
        loader: 'url-loader?limit=8192',
      },
    ],
  },
};

module.exports = config;
