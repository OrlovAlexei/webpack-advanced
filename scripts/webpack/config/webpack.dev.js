import merge from "webpack-merge";
import * as modules from "../modules";
import { getCommonConfig } from "./webpack.common";

module.exports = () => {
  return merge(
    getCommonConfig(),
    {
      mode: "development",
      devtool: "source-map",
    },
    modules.loadDevCss(),
    modules.connectFriendlyErrors()
  );
};
