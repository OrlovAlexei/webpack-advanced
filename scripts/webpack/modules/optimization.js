import imageminMozjpeg from "imagemin-mozjpeg";
import imageminSvgo from "imagemin-svgo";
import ImageminWebpackPlugin from "imagemin-webpack";
import TerserPlugin from "terser-webpack-plugin";

export const optimizeImages = () => ({
  plugins: [
    new ImageminWebpackPlugin({
      pngquant: { quality: [0.5, 0.5] },
      imageminOptions: {
        plugins: [imageminSvgo(), imageminMozjpeg({ quality: 50 })],
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
