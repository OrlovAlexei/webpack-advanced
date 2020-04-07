import chalk from "chalk";
import detectPort from "detect-port-alt";
import inquirer from "inquirer";

/**
 * Get port.
 * @param {number} defaultPort - The default port for server.
 * @return {Promise<number>}  Selected port
 */
exports.choosePort = async (defaultPort) => {
  try {
    const port = await detectPort(defaultPort);
    if (port === defaultPort) {
      return defaultPort;
    }

    const message = `Port ${defaultPort} is taken.`;

    if (process.stdout.isTTY) {
      const qName = "changePort";
      const q = {
        type: "confirm",
        name: qName,
        message: chalk.yellowBright(`${message} Do you to run app on another port ?`),
      };

      const result = await inquirer.prompt(q);

      return result[qName] ? port : null;
    }
  } catch (error) {
    console.log(chalk.redBright("Error"));
    console.error(error.message || error);
  }
};
