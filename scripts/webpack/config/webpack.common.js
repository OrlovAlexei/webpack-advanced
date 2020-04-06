const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const { BUILD_DIR, SOURCE_DIR } = require("../constants");

module.exports = () => ({
  mode: "none",
  entry: SOURCE_DIR,
  output: {
    path: BUILD_DIR,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./static/index.html",
      title: "Webpack advanced",
      favicon: "./static/favicon-32x32.ico",
    }),
  ],
});
