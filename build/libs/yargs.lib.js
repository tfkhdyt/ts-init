"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.argv = void 0;
const yargs_1 = __importDefault(require("yargs/yargs"));
exports.argv = (0, yargs_1.default)(process.argv.slice(2))
    .options({
    yarn: { type: 'boolean', default: false },
    git: { type: 'boolean', default: false },
    y: { type: 'boolean', default: false, alias: 'yes' },
    p: { type: 'boolean', default: true, alias: 'prettier' },
})
    .parseSync();
