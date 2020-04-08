import { DefinePlugin } from "webpack";
import merge from "webpack-merge";
import { BUILD_DIR, SOURCE_DIR } from "../constants";
import * as modules from "../modules";

export const getCommonConfig = () => {
  const { NODE_ENV } = process.env;
  return merge(
    {
      mode: "none",
      entry: SOURCE_DIR,
      output: {
        path: BUILD_DIR,
        filename: "js/main.js",
        publicPath: "/",
      },
      resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
      plugins: [
        new DefinePlugin({
          API_URI: JSON.stringify("[http://API_URI]"),
          __ENV__: JSON.stringify(NODE_ENV),
          __DEV__: NODE_ENV === "development",
          __PROD__: NODE_ENV === "production",
        }),
      ],
    },
    modules.loadTypescript(),
    modules.setupHtml(),
    modules.loadImages(),
    modules.loadSvg(),
    modules.loadFonts()
  );
};
