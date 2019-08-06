"use strict";

const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: ["./index.js"],
  output: {
    path: "//vmmh0qls001/QlikShare/StaticContent/Extensions/Mash"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devtool: "inline-source-map",
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
      cleanAfterEveryBuildPatterns: ["*.*.js"]
    }),
    new webpack.HashedModuleIdsPlugin(),

    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./Mash.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    new CopyPlugin([
      {
        from: "Mash.qext",
        to: "Mash.qext"
      },
      {
        from: "wbfolder.wbl",
        to: "wbfolder.wbl"
      }
    ])
  ],
  optimization: {
    concatenateModules: true,
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  }
};
