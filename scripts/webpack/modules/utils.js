import { CleanWebpackPlugin } from "clean-webpack-plugin";
import FriendlyErrorsWebpackPlugin from "friendly-errors-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import Webpackbar from "webpackbar";

export const connectFriendlyErrors = () => ({
  plugins: [new FriendlyErrorsWebpackPlugin()],
});

export const connectBuildProgressIndicator = () => ({
  plugins: [new Webpackbar()],
});

export const cleanDirectory = () => ({
  plugins: [new CleanWebpackPlugin()],
});

export const connectBundleAnalyzer = () => ({
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "disabled",
      openAnalyzer: false,
      generateStatsFile: true,
    }),
  ],
});
