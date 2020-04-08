import cssnano from "cssnano";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import postCssenv from "postcss-preset-env";

// Helpers
export const loadCss = ({ sourceMap = false } = { sourceMap: false }) => ({
  loader: "css-loader",
  options: {
    sourceMap,
    modules: {
      mode: "local",
      localIdentName: "[path][name]--[hash:base64:5]__[local]",
    },
  },
});

export const loadPostcss = (
  { sourceMap = false, minify = false } = { sourceMap: false, minify: false }
) => {
  const plugins = [
    postCssenv({
      stage: 0, // def 2
    }),
  ];

  if (minify) plugins.push(cssnano);

  return {
    loader: "postcss-loader",
    options: {
      sourceMap,
      plugins,
    },
  };
};

// Core
export const loadDevCss = () => ({
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [
          "style-loader",
          loadCss({ sourceMap: true }),
          loadPostcss({ sourceMap: true, minify: false }),
        ],
      },
    ],
  },
});

export const loadProdCss = () => ({
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [
          MiniCssExtractPlugin.loader,
          loadCss({ sourceMap: false }),
          loadPostcss({ sourceMap: false, minify: true }),
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[id].css",
      chunkFilename: "css/[name].[id].css",
    }),
  ],
});
