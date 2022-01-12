"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setProcessNumber = exports.processNumber = exports.prettier = exports.yes = exports.git = exports.packageManager = exports.projectName = void 0;
const yargs_lib_1 = require("../libs/yargs.lib");
const projectName = yargs_lib_1.argv._[0].toString();
exports.projectName = projectName;
const packageManager = yargs_lib_1.argv.yarn ? 'yarn' : 'npm';
exports.packageManager = packageManager;
const git = yargs_lib_1.argv.git;
exports.git = git;
const yes = yargs_lib_1.argv.y;
exports.yes = yes;
const prettier = yargs_lib_1.argv.p;
exports.prettier = prettier;
let processNumber = 1;
exports.processNumber = processNumber;
const setProcessNumber = (number) => {
    exports.processNumber = processNumber = number;
};
exports.setProcessNumber = setProcessNumber;
if (!projectName) {
    console.error('You should pass the project name!');
    process.exit(1);
}
