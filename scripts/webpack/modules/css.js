import postCssEnv from "postcss-preset-env";

export const loadCss = () => ({
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
                  // postcssCustomMedia: postcssCustomMedia({
                  //   importFrom: [
                  //     {
                  //       customMedia: {
                  //         "--phoneP": "(width <= 414px)",
                  //         "--phoneL": "(width >= 415px) and (width <= 667px)",
                  //       },
                  //     },
                  //   ],
                  // }),
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
    ],
  },
});
