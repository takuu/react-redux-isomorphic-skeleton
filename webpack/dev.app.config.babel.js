/* eslint-env node */
import webpack from 'webpack';
import path from 'path';
import cssnext from 'cssnext';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
const bundle = process.env.BUNDLE || 'client';
const env = process.env.NODE_ENV || 'development';

module.exports = {
  debug: true,
  devtool: bundle === 'server'
    ? 'source-map'
    : 'eval-cheap-module-source-map',
  context: path.join(__dirname, '../app'),
  entry: [
    '../app/client',
    'webpack-hot-middleware/client'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'js/app.js'
  },

  plugins: [
    new ExtractTextPlugin('app.css', {
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(env), BROWSER: JSON.stringify(true) }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader?limit=10000',
      },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      }
    ]
  },

  postcss: () => {
    return [cssnext];
  }
};
