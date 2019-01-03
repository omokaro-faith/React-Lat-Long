const path = require('path');
const webpack = require('webpack');
require('dotenv').config({ path: '.env'});

module.exports = {
  entry: './client/src/app.js',
  output: {
    path: path.join(__dirname, 'client', 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      options: {
        rootMode: "upward",
      }
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
      'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
      'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
      'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
      'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
      'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
      'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
    })
  ],
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'client', 'public'),
    historyApiFallback: true
  }
};
