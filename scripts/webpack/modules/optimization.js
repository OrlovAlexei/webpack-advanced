import imageminMozjpeg from "imagemin-mozjpeg";
import imageminSvgo from "imagemin-svgo";
import ImageminWebpackPlugin from "imagemin-webpack";

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
