const path = require('path');
const MODE = "production";
const enabledSourceMap = MODE === " development";

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname,"dist"),
    filename: 'main.js',
  },
  mode: MODE,
    module: {
      rules: [
        {
          test: /\.scss/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                url: false,
                sourceMap: enabledSourceMap,
                importLoaders: 2,
              },
            },
            {
              loader: "sass-loader",
              options: {
              sourceMap: enabledSourceMap,
              },
            },
          ],
        },
        {
          test: /\.(gif|png|jpg|wof|woff|ttf|svg)$/,
          type: "asset/inline",
        },
      ],
    },
  target: ["web","es5"]
};