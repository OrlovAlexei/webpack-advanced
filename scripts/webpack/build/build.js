import chalk from "chalk";
import webpack from "webpack";
import getProdConfig from "../config/webpack.prod";

// console.log(chalk.green("Start build!"));

const compiler = webpack(getProdConfig());

compiler.run((error, stats) => {
  if (error) {
    console.log(chalk.red, "💩️ ERROR IN CONFIG  💩️");
    consol.error(error.stack || error);

    if (error.details) {
      console.error(error.details);
    }

    return null;
  }

  const info = stats.toString({
    hash: false,
    colors: true,
    version: false,
    env: false,
    modules: false,
    entrypoints: false,
    chunks: false,
    moduleAssets: false,
    warnings: false,
  });

  if (stats.hasErrors()) {
    console.log(chalk.redBright("💩️ COMPILE ERROR! 💩️"));
  }

  if (stats.hasWarnings()) {
    console.log(chalk.yellowBright("💩️ COMPILE WARNING! 💩️"));
  }
  console.log("");
  console.log(info);
  // console.log(chalk.greenBright("Build Completed!"));
});
