"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const gitInit = () => {
    (0, child_process_1.exec)('git init', (error, stdout, stderr) => {
        if (error)
            throw error;
        if (stdout)
            console.log(stdout);
        if (stderr)
            console.error(stderr);
    });
};
exports.default = gitInit;
