import merge from "webpack-merge";
import * as modules from "../modules";
import { getCommonConfig } from "./webpack.common";

module.exports = () => {
  return merge(
    getCommonConfig(),
    {
      mode: "production",
    },
    modules.loadProdCss(),
    modules.optimizeImages(),
    modules.cleanDirectory(),
    modules.connectBuildProgressIndicator()
  );
};
