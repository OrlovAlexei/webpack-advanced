import chalk from "chalk";
import openBrowser from "react-dev-utils/openBrowser";
import webpack from "webpack";
import DevServer from "webpack-dev-server";
import hot from "webpack-hot-middleware";
import getDevConfig from "../config/webpack.dev";
import { HOST, PORT } from "../constants";
import { choosePort } from "../port";

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
      quiet: false, // я обновился
      clientLogLevel: "none",
      noInfo: true,
      after: (app) => {
        app.use(hot(compiler, { log: false }));
      },
    });

    server.listen(selectedPort, HOST, () => {
      const url = `http://${HOST}:${selectedPort}`;
      console.log(chalk.magenta("🐥️ Happy hacking! 🐥️"));
      console.log(`Server listening on  ${chalk.blueBright(url)}`);
      openBrowser(url);
    });
  } catch (err) {
    console.log(chalk.redBright("Error"));
    console.error(error.message || error);
  }
})();
