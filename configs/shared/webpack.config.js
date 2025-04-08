const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("../../package.json").dependencies;
require('dotenv').config();

module.exports = {
  target: "web",
  cache: true,
  entry: path.resolve(__dirname, "../../src/index.tsx"),
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
    mainFiles: ["index"],
    preferAbsolute: true,
    modules: [path.resolve(__dirname, "../../"), "node_modules"],
    importsFields: ["browser", "module", "main"],
    alias: {
      src: path.resolve(__dirname, "../../src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /\.module\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new ModuleFederationPlugin({
      name: "ccxcoreui",
      filename: "remoteEntry.js",
      exposes: {
        "./formatDate": path.resolve(__dirname, "../../src/utils/formatDate"),
        "./MyButton": path.resolve(__dirname, "../../src/components/MyButton/MyButton"),
        "./App": path.resolve(__dirname, "../../src/App"),
      },
      shared: {
        // react: { singleton: true, requiredVersion: deps.react },
        // 'react-dom': { singleton: true, requiredVersion: deps['react-dom'] },
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../../public/index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].[contenthash].css",
      chunkFilename: "assets/css/[name].[contenthash].chunk.css",
    }),
  ],
};
