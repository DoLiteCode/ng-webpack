/*jshint esversion: 6 */

const path = require('path');
//const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractPlugin = new ExtractTextPlugin({
  filename: 'css/styles.css'

});

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


// http://babeljs.io/env

// https://www.npmjs.com/package/extract-text-webpack-plugin

module.exports = {
  context: path.resolve(__dirname, "app"),
  devServer: {
    port: 8000,
    contentBase: path.resolve(__dirname, 'app')
  },
  entry: './src/javascript/app.js',
  output: {
    path: path.resolve(__dirname, 'app/dist'),
    filename: 'js/main.js',
    //publicPath: '/dist'
  },
  module: {
    rules: [
      /*{
        test: /\.css/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },*/
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', {
                "targets": {
                  "browsers": ["last 2 versions", "safari >= 7"]
                }
              }]
            ]
          }
        }]
      },
      {
        test: /\.css/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(jpg|png)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img/',
            publicPath: 'img/'
          }
        }]
      }
      /*,
            {
              test: /\.js$/,
              exclude: /node_modules/,
              include: path.resolve(__dirname, 'dist'),
              use: ['babel-loader'],
              query: {
                    presets: ['es2015', 'react']
                }
            }
            {
                test: /\.css$/,
                loader: combineLoaders([
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        query: {
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        },
                    }
                ])
            },
            {
                test: /\.(woff|ttf|eot|svg)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
                loader: 'url-loader?limit=100000'
            },
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
            },
            {
              test: /\.(png|svg|jpg|gif)$/,
              use: ['file-loader']
            },
            {
              test: /\.(woff|woff2|eot|ttf|otf)$/,
              use: ['file-loader']
            }
            */
    ]
  },
  plugins: [
    // minify output
    new UglifyJSPlugin(),
    //new webpack.optimize.AggressiveMergingPlugin()
    //new webpack.optimize.UglifyJsPlugin()

    extractPlugin,

    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};

//--content-base ./app --entry ./app/src/javascript/app.js --output-filename ./dist/js/main.js