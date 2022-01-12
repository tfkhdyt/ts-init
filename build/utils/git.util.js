"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
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
exports.default = gitInit;
