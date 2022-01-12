#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cli_config_1 = require("./configs/cli.config");
const cd_util_1 = __importDefault(require("./utils/cd.util"));
const mkdir_util_1 = __importDefault(require("./utils/mkdir.util"));
const git_util_1 = __importDefault(require("./utils/git.util"));
const pacman_util_1 = require("./utils/pacman.util");
console.log('Project Name    : ' + cli_config_1.projectName);
// console.log('Package Manager : ' + packageManager)
console.log('Git             : ' + cli_config_1.git);
// console.log('No Confirmation : ' + yes)
console.log('Prettier        : ' + cli_config_1.prettier + '\n');
(0, mkdir_util_1.default)(cli_config_1.projectName);
(0, cd_util_1.default)(cli_config_1.projectName);
if (cli_config_1.git) {
    (0, git_util_1.default)();
}
(0, pacman_util_1.init)();
