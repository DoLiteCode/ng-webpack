const CopyWebpackPlugin = require('copy-webpack-plugin');
const { AngularCompilerPlugin } = require('@ngtools/webpack');

const buildDir = __dirname + "/app/build";
// console.log(buildDir);
module.exports = function() {
  return {
    entry: "./app/src/main.ts",
    output: {
      path: buildDir,
      filename: "app.js"
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: [".ts", ".tsx", ".js"]
    },
    module: {
      rules: [
        {test: /\.ts$/, loader: '@ngtools/webpack'}
      ]
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          from: "app/src/css",
          to: "css"
        }
      ]),

      new AngularCompilerPlugin({
        tsConfigPath: './tsconfig.json',
        entryModule: './app/src/app/app.module#AppModule',
        sourceMap: true
      })
    ]
  };
};