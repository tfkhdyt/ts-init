"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tsInit = void 0;
const child_process_1 = require("child_process");
const tsInit = () => {
    console.log('Initializing TypeScript...');
    try {
        const res = (0, child_process_1.execSync)('npx tsc --init');
        console.log(res.toString());
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
};
exports.tsInit = tsInit;
