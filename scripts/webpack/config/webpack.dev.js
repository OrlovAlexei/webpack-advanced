import merge from "webpack-merge";
import { getCommonConfig } from "./webpack.common";

module.exports = () => {
  return merge(getCommonConfig(), {
    mode: "development",
    devtool: "source-map",
  });
};
