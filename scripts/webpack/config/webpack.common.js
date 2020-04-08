import merge from "webpack-merge";
import { BUILD_DIR, SOURCE_DIR } from "../constants";
import * as modules from "../modules";

export const getCommonConfig = () => {
  return merge(
    {
      mode: "none",
      entry: SOURCE_DIR,
      output: {
        path: BUILD_DIR,
        filename: "js/main.js",
      },
      resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
    },
    modules.loadTypescript(),
    modules.setupHtml(),
    // modules.loadCss(),
    modules.loadImages(),
    modules.loadSvg(),
    modules.loadFonts()
  );
};
