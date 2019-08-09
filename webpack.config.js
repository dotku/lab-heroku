const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const webpack = require('webpack');
const package = require("./package.json");

module.exports = {
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
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
      filename: "./index.html"
    }),
    new webpack.DefinePlugin({
      ENV: JSON.stringify(process.env),
      NAME: JSON.stringify(package.name),
      VERSION: JSON.stringify(package.version),
    })
  ]
};