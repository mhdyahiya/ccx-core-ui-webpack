const { merge } = require("webpack-merge");
const shared = require("../shared/webpack.config");
const path = require("path");

module.exports = merge(shared, {
  mode: "development",
  watch: false,
  devtool: "eval-source-map",
  output: {
    filename: "[name].js",
    chunkFilename: "scripts/[name].chunk.js",
    publicPath: "/",
    path: path.resolve(__dirname, "../../dist"),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "../../dist"),
      publicPath: "/",
    },
    port: Number(process.env.REACT_APP_SERVER_PORT) || 3000,
    open: true,
    compress: true,
    hot: true,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    client: {
      overlay: true,
      logging: "info",
    },
  },
  optimization: {
    minimize: false,
  },
});
