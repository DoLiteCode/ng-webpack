'use strict';
const { AngularCompilerPlugin } = require('@ngtools/webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const helpers = require('./helpers');
const isDev = process.env.NOVE_ENV != 'production';

const path = require('path');
const appDir = helpers.root('my-app');
const srcDir = path.join(appDir, 'src');
const buildDir = path.join(appDir, 'build');
const buildPath = '/build/';

const mainFile = 'main.ts';

const webpackCommonConfig = {
  entry: {
    //vendor: path.join(srcDir, 'vendor.ts'),
    //polyfills: path.join(srcDir, 'polyfills.ts'),
    main: path.join(srcDir, (isDev ? 'main.ts' : 'main.aot.ts'))
  },
  //entry: path.join(srcDir, (isDev ? 'main.ts' : 'main.aot.ts')),
  output: {
    path: buildDir,
    publicPath: buildPath,
    filename: '[name].bundle.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js", '.scss']
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          { loader: 'style-loader', options: { sourceMap: isDev } },
          { loader: 'css-loader', options: { sourceMap: isDev } },
          { loader: 'sass-loader', options: { sourceMap: isDev } }
        ],
        include: path.join(appDir, 'src/assets'),
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          'to-string-loader',
          { loader: 'css-loader', options: { sourceMap: isDev } },
          { loader: 'sass-loader', options: { sourceMap: isDev } }
        ],
        include: path.join(appDir, 'src/app')
      },
      { test: /[\/\\]@angular[\/\\].+\.js$/, parser: { system: true } },
      {
        test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.tsx?)$/, 
        loader: '@ngtools/webpack'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new AngularCompilerPlugin({
      tsConfigPath: helpers.root('tsconfig.json'), //'./tsconfig.json',
      entryModule: path.join(appDir, 'src/app/app.module#AppModule'),//helpers.root('my-app', 'src', 'app', 'app.module#AppModule'), //'./my-app/src/app/app.module#AppModule',
      sourceMap: true
    })
  ]
};

if (isDev) {
  webpackCommonConfig.devServer = {
    contentBase: appDir,
    publicPath: buildPath,
    compress: true,
    port: 9000
  };
}

module.exports = webpackCommonConfig;