"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGitIgnore = exports.gitInit = void 0;
const child_process_1 = require("child_process");
const fs_1 = require("fs");
const cli_config_1 = require("../configs/cli.config");
const gitInit = () => {
    console.log(`[${cli_config_1.processNumber}] Initializing git...`);
    (0, cli_config_1.setProcessNumber)(cli_config_1.processNumber + 1);
    try {
        const res = (0, child_process_1.execSync)('git init');
        console.log(res.toString());
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
};
exports.gitInit = gitInit;
const createGitIgnore = () => {
    console.log(`[${cli_config_1.processNumber}] Creating .gitignore...`);
    (0, cli_config_1.setProcessNumber)(cli_config_1.processNumber + 1);
    try {
        (0, fs_1.writeFileSync)('./.gitignore', `**/node_modules
**/build`);
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
};
exports.createGitIgnore = createGitIgnore;
