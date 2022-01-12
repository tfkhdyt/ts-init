"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const child_process_1 = require("child_process");
const pacman_lib_1 = require("../libs/pacman.lib");
const init = () => {
    (0, child_process_1.exec)(`${pacman_lib_1.scripts.npm.init} -y`, (error, stdout, stderr) => {
        if (error)
            throw error;
        if (stdout)
            console.log(stdout);
        if (stderr)
            console.error(stderr);
    });
};
exports.init = init;
