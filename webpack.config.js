const CopyWebpackPlugin = require('copy-webpack-plugin');

const buildDir = __dirname + "/app/build";
console.log(buildDir);
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
    plugins: [
      new CopyWebpackPlugin([
        {
          from: "app/src/css",
          to: "css"
        }
      ])
    ]
  };
};