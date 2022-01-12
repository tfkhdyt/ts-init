"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setScript = void 0;
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const cli_config_1 = require("../configs/cli.config");
const setScript = () => {
    try {
        console.log(`[${cli_config_1.processNumber}] Configurating package.json...`);
        (0, cli_config_1.setProcessNumber)(cli_config_1.processNumber + 1);
        const res = (0, fs_1.readFileSync)(path_1.default.join(process.cwd(), 'package.json'), 'utf8');
        const parsed = JSON.parse(res);
        const newConfig = Object.assign(Object.assign({}, parsed), { scripts: {
                dev: "tsc-watch --onSuccess 'node ./build/index.js'",
                start: 'node ./build/index.js',
            }, prettier: {
                semi: false,
                singleQuote: true,
            }, main: './src/index.ts' });
        try {
            (0, fs_1.writeFileSync)(path_1.default.join(process.cwd(), 'package.json'), JSON.stringify(newConfig, null, 2));
        }
        catch (error) {
            console.log(error);
            process.exit(1);
        }
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
};
exports.setScript = setScript;
