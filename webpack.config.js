const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin")


module.exports = {
    entry: "./client/index.js",
    mode: "development",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader",
          options: { presets: ["@babel/env"] }
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
      path: path.resolve(__dirname, "build/"),
      publicPath: "/build/",
      filename: "bundle.js"
    },
    devServer: {
      contentBase: path.join(__dirname, "public/"),
      port: 3000,
      publicPath: "http://localhost:3000/build/",
      hotOnly: true
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
  };