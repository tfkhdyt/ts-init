"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const cli_config_1 = require("../configs/cli.config");
const mkdir = (projectName) => {
    const isProjectExists = fs_1.default.existsSync(path_1.default.join(process.cwd(), projectName));
    if (isProjectExists) {
        console.error('ERROR: Project is already exists!');
        process.exit(1);
    }
    else {
        console.log(`[${cli_config_1.processNumber}] Creating ${projectName}...`);
        (0, cli_config_1.setProcessNumber)(cli_config_1.processNumber + 1);
        fs_1.default.mkdirSync(projectName);
        if (projectName === 'src') {
            fs_1.default.writeFileSync('./src/index.ts', "console.log('Hello world!')");
        }
    }
};
exports.default = mkdir;
