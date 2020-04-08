import { CleanWebpackPlugin } from "clean-webpack-plugin";
import merge from "webpack-merge";
import * as modules from "../modules";
import { getCommonConfig } from "./webpack.common";

module.exports = () => {
  return merge(
    getCommonConfig(),
    {
      mode: "production",
      plugins: [new CleanWebpackPlugin({ dry: true })],
    },
    modules.loadProdCss(),
    modules.optimizeImages()
  );
};
