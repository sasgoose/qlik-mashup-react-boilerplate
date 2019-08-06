const webpack = require("webpack");
// const dotenv = require("dotenv");
// const path = require("path");
// const fs = require("fs");

const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = env => {
  return merge(common, {
    mode: "development",
    output: {
      path: "//vmmh0qls001/QlikShare/StaticContent/Extensions/Mash"
    },
    module: {
      rules: [
        {
          test: /\.(css|scss)$/,
          use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
        }
      ]
    },
    plugins: [
      //   new webpack.DefinePlugin(envKeys),
    ]
  });
};
