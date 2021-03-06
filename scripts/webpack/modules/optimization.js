import ImageminWebpackPlugin from "imagemin-webpack";
import TerserPlugin from "terser-webpack-plugin";
import { ContextReplacementPlugin } from "webpack";

export const optimizeImages = () => ({
  plugins: [
    new ImageminWebpackPlugin({
      pngquant: { quality: [0.5, 0.5] },
      imageminOptions: {
        plugins: [
          [
            "svgo",
            {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            },
          ],
          ["mozjpeg", { quality: 50 }],
        ],
      },
    }),
  ],
});

export const optimizeBuild = () => ({
  optimization: {
    nodeEnv: "production",
    minimize: true,
    minimizer: [new TerserPlugin()],
    noEmitOnErrors: true,
    //def
    removeEmptyChunks: true,
    //def
    mergeDuplicateChunks: true,
    //def
    removeAvailableModules: true,
    // removed webpack5
    occurrenceOrder: true,
    concatenateModules: true,
    //def
    providedExports: true,
    // завичит от providedExports
    usedExports: true,
    // on tree-shaking
    sideEffects: true,
    moduleIds: "natural",
  },
});

export const optimizeMoment = () => ({
  plugins: [new ContextReplacementPlugin(/moment[/\\]locale$/, /ru/)],
});
