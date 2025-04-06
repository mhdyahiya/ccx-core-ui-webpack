const { merge } = require("webpack-merge");
const shared = require("../shared/webpack.config");
const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const appDetails = require("../../package.json");
const contentBasePath = path.resolve(
  __dirname,
  `../../dist/${appDetails.name}`,
);
const publicPath = `${process.env.REACT_APP_PUBLIC_PATH}/${appDetails.name}/`;

module.exports = merge(shared, {
  mode: "production",
  devtool: "source-map",
  output: {
    path: contentBasePath,
    publicPath: publicPath,
    filename: "assets/js/[name].[contenthash].js",
    chunkFilename: "assets/js/[name].[contenthash].chunk.js",
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
  plugins: [new CompressionPlugin()],
});
