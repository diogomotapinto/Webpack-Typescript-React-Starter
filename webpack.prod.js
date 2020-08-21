const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  output: {
    publicPath:
      process.env.NODE_ENV == "production"
        ? `http://localhost:${process.env.PORT}/`
        : "http://localhost:3000/",
  },
  devServer: {
    port: process.env.NODE_ENV == "production" ? process.env.PORT : 3000,
  },
});
