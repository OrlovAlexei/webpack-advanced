const chalk = require("chalk");
const detectPort = require("detect-port-alt");
const inquirer = require("inquirer");

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
