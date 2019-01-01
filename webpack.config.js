const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './client/src/app.js',
  output: {
    path: path.join(__dirname, 'client', 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: [/node_modules/, /server/]
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ]
    },
    {
      test: /\.(jpg|png|svg)$/,
      loader: 'url-loader',
      options: {
        limit: 25000,
      },
    },
    { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
  ]},
  devtool: 'inline-source-map',
  plugins:[
    new webpack.DefinePlugin({
      'process.env.REACT_APP_GOOGLE_API_KEY': JSON.stringify(process.env.REACT_APP_GOOGLE_API_KEY),
    })
  ],
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'client', 'public'),
    historyApiFallback: true
  }
};
