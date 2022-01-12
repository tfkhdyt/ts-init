"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const gitInit = () => {
    console.log('Initializing git...');
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
