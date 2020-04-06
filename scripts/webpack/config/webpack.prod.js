const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const merge = require("webpack-merge");

const getCommonConfig = require("./webpack.common");

module.exports = () => {
  return merge(getCommonConfig(), {
    mode: "production",
    plugins: [new CleanWebpackPlugin({ dry: true })],
  });
};
