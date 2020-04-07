import { CleanWebpackPlugin } from "clean-webpack-plugin";
import merge from "webpack-merge";
import { getCommonConfig } from "./webpack.common";

module.exports = () => {
  return merge(getCommonConfig(), {
    mode: "production",
    plugins: [new CleanWebpackPlugin({ dry: true })],
  });
};
