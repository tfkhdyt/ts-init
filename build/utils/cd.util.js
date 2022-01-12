"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const cli_config_1 = require("../configs/cli.config");
// import fs from 'fs'
const cd = (projectName) => {
    projectName = path_1.default.join(process.cwd(), projectName);
    try {
        console.log(`[${cli_config_1.processNumber}] Opening Folder...`);
        (0, cli_config_1.setProcessNumber)(cli_config_1.processNumber + 1);
        process.chdir(projectName);
        // console.log('pindah folder sukses')
        // fs.writeFileSync('index.ts', 'kontol')
    }
    catch (err) {
        console.error(err);
    }
};
exports.default = cd;
