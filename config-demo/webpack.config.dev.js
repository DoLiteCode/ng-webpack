'use strict';

const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

module.exports = webpackMerge(commonConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  optimization: {
    noEmitOnErrors: true
  }
});




/*
const __devConfig = webpackMerge(commonConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  optimization: {
    noEmitOnErrors: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: helpers.root('tsconfig.json')
            }
          },
          'angular2-template-loader',
          'angular-router-loader'
        ],
        exclude: [/node_modules/]
      }
    ]
  },
  devServer: {
    contentBase: appDir,
    publicPath: '/build/',
    compress: true,
    port: 9000
  }
});

console.log(__devConfig);
*/

/*

const { AngularCompilerPlugin } = require('@ngtools/webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');


const helpers = require('./helpers');

const path = require('path');


const appDir = helpers.root('my-app');//path.resolve(__dirname, '../my-app');

const srcDir = path.join(appDir, 'src');
const buildDir = path.join(appDir, 'build'); //path.resolve(__dirname, 'my-app/build');//__dirname + "/app/build";

const mainFile = 'main.ts';
// const buildFile = 'main.js';

module.exports =  {
  entry: srcDir + '/' + mainFile,
  output: {
    // filename: buildFile,
    path: buildDir,
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/, 
        loader: '@ngtools/webpack'
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      },
      { test: /[\/\\]@angular[\/\\].+\.js$/, parser: { system: true } }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),

    new AngularCompilerPlugin({
      tsConfigPath: helpers.root('tsconfig.json'), //'./tsconfig.json',
      entryModule: path.join(appDir, 'src/app/app.module#AppModule'),//helpers.root('my-app', 'src', 'app', 'app.module#AppModule'), //'./my-app/src/app/app.module#AppModule',
      sourceMap: true
    })
  ],
  devServer: {
    contentBase: appDir,
    publicPath: '/build/',
    compress: true,
    port: 9000
  }
}
*/
