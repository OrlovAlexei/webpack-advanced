import htmlWebpackPlugin from "html-webpack-plugin";

export const setupHtml = () => ({
  plugins: [
    new htmlWebpackPlugin({
      template: "./static/index.html",
      title: "Webpack advanced",
      favicon: "./static/favicon-32x32.ico",
    }),
  ],
});

export const loadImages = () => ({
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[hash:7].[ext]",
            },
          },
        ],
      },
    ],
  },
});

export const loadSvg = () => ({
  module: {
    rules: [
      {
        test: /\.svg$/i,
        issuer: {
          test: /\.tsx$/i,
        },
        use: [
          {
            loader: "@svgr/webpack",
          },
        ],
      },
      {
        test: /\.svg$/i,
        issuer: {
          test: /\.css$/i,
        },
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash:7].[ext]",
            },
          },
        ],
      },
    ],
  },
});

export const loadFonts = () => ({
  module: {
    rules: [
      {
        test: /\.(woff2|ttf)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "fonts/[name].[hash:7].[ext]",
            },
          },
        ],
      },
    ],
  },
});
