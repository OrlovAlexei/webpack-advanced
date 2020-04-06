const webpack = require("webpack");
const chalk = require("chalk");
const hot = require("webpack-hot-middleware");
const DevServer = require("webpack-dev-server");

const { choosePort } = require("./port");

const getDevConfig = require("./config/webpack.dev");

const { HOST, PORT } = require("./constants");

const compiler = webpack(getDevConfig());

(async () => {
  try {
    const selectedPort = await choosePort(PORT);

    if (!selectedPort) {
      console.log(chalk.yellowBright("Its impossible to run the app. Maybe you said 'No' :("));
      return null;
    }
    const server = new DevServer(compiler, {
      host: HOST,
      port: selectedPort,
      historyApiFallback: true,
      // inline: true,
      overlay: true,
      quiet: true, // я обновился
      clientLogLevel: "none",
      noInfo: true,
      after: (app) => {
        app.use(hot(compiler, { log: false }));
      },
    });

    server.listen(selectedPort, HOST, () => {
      console.log(`Server listening on  ${chalk.blueBright(`http://${HOST}:${selectedPort}`)}`);
      console.log(chalk.magenta("🐥️ Happy hacking! 🐥️"));
    });
  } catch (err) {
    console.log(chalk.redBright("Error"));
    console.error(error.message || error);
  }
})();
