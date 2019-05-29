'use strict';


const environment = (process.env.NODE_ENV || 'development').trim();

// testdevelopment

if (environment === 'testdevelopment') {
  module.exports = require('./config-demo/webpack.config.dev');
} else if (environment === 'testproduction') {
  module.exports = require('./config-demo/webpack.config.dev');
} else
if (environment === 'development') {
  module.exports = require('./config/webpack.config.dev');
} else {
  module.exports = require('./config/webpack.config.prod');
}

/*
const { AngularCompilerPlugin } = require('@ngtools/webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const helpers = require('./config/helpers');

const path = require('path');


const appDir = path.resolve(__dirname, 'my-app');
const srcDir = path.join(appDir, 'src');
const buildDir = path.join(appDir, 'build'); //path.resolve(__dirname, 'my-app/build');//__dirname + "/app/build";

const mainFile = 'main.ts';
const buildFile = 'main.js';

module.exports =  {
  entry: srcDir + '/' + mainFile,
  output: {
    //filename: buildFile,
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
      entryModule: helpers.root('my-app', 'src', 'app', 'app.module#AppModule'), //'./my-app/src/app/app.module#AppModule',
      sourceMap: true
    })
  ],
  devServer: {
    contentBase: appDir,
    publicPath: '/build/',
    compress: true,
    port: 9000
  }
}*/