import { path as rootPath } from "app-root-path";
import { resolve } from "path";

export const PROJECT_ROOT = rootPath;
export const BUILD_DIR = resolve(PROJECT_ROOT, "./dist");
export const SOURCE_DIR = resolve(PROJECT_ROOT, "./src");
export const HOST = "localhost";
export const PORT = 3000;
