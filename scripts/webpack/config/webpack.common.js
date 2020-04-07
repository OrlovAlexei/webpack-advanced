const htmlWebpackPlugin = require("html-webpack-plugin");
const postCssEnv = require("postcss-preset-env");
const postcssCustomMedia = require("postcss-custom-media");

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
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[path][name]--[hash:base64:5]__[local]",
              },
            },
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [
                postCssEnv({
                  stage: 0, // def 2
                  postcssCustomMedia: postcssCustomMedia({
                    importFrom: [
                      {
                        customMedia: {
                          "--phoneP": "(width <= 414px)",
                          "--phoneL": "(width >= 415px) and (width <= 667px)",
                        },
                      },
                    ],
                  }),
                  // features: {
                  //   "custom-media-queries": {
                  //     importFrom: [
                  //       {
                  //         "--phoneP": "(width <= 414px)",
                  //         "--phoneL": "(width >= 415px) and (width <= 667px)",
                  //       },
                  //     ],
                  //   },
                  // },
                }),
              ],
            },
          },
        ],
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
