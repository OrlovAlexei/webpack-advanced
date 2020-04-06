const { resolve } = require("path");
const { path: PROJECT_ROOT } = require("app-root-path");

exports.PROJECT_ROOT = PROJECT_ROOT;
exports.BUILD_DIR = resolve(PROJECT_ROOT, "./dist");
exports.SOURCE_DIR = resolve(PROJECT_ROOT, "./src");
exports.HOST = "localhost";
exports.PORT = 3000;
