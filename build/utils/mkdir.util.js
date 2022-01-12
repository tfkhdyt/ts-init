"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const mkdir = (projectName) => {
    const isProjectExists = fs_1.default.existsSync(path_1.default.join(process.cwd(), projectName));
    if (isProjectExists) {
        console.error('ERROR: Project is already exists!');
        process.exit(1);
    }
    else {
        fs_1.default.mkdirSync(projectName);
    }
};
exports.default = mkdir;
