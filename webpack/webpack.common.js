const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const config = require("./config");

module.exports = {
  entry: ["./index.js"],
  output: {
    path:
      process.env.NODE_ENV === "development"
        ? config[`OUTPUT_PATH_development`]
        : config[`OUTPUT_PATH_production`]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
        use: [
          {
            loader: "url-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devtool: "inline-source-map",
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
      cleanAfterEveryBuildPatterns: ["*.js"]
    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
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
        from: "./config/Mashup.qext",
        to: "Mashup.qext"
      },
      {
        from: "./config/wbfolder.wbl",
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
