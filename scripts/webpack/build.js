const webpack = require("webpack");
const chalk = require("chalk");

const getProdConfig = require("./config/webpack.prod");

console.log(chalk.green("Start build!"));

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
    hash: true,
    colors: true,
    version: true,
    env: true,
    modules: false,
    entrypoints: false,
  });

  if (stats.hasErrors()) {
    console.log(chalk.redBright("💩️ COMPILE ERROR! 💩️"));
    console.error(info);
    return;
  }

  if (stats.hasWarnings()) {
    console.log(chalk.yellowBright("💩️ COMPILE WARNING! 💩️"));
    return;
  }

  console.log(info);
  console.log(chalk.greenBright("Build Completed!"));
});
