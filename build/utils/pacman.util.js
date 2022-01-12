"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.installDep = exports.init = void 0;
const child_process_1 = require("child_process");
const pacman_lib_1 = require("../libs/pacman.lib");
const init = () => {
    console.log('Initializing npm...');
    try {
        const res = (0, child_process_1.execSync)(`${pacman_lib_1.scripts.npm.init} -y`);
        console.log(res.toString());
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
};
exports.init = init;
const installDep = (prettier) => {
    console.log('Installing dependencies...');
    try {
        const res = (0, child_process_1.execSync)(`npm i typescript tsc-watch ${prettier && 'prettier'} --save-dev`);
        console.log(res.toString());
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
};
exports.installDep = installDep;
