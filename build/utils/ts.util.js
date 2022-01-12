"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tsInit = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const cli_config_1 = require("../configs/cli.config");
const tsInit = () => {
    console.log(`[${cli_config_1.processNumber}] Initializing TypeScript...`);
    (0, cli_config_1.setProcessNumber)(cli_config_1.processNumber + 1);
    const config = `{
    "compilerOptions": {
        "target": "es2016",  
        "module": "commonjs", 
        "rootDir": "./src",
        "moduleResolution": "node",    
        "outDir": "./build", 
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,         
        "strict": true,
        "skipLibCheck": true  
    }
  }`;
    try {
        // const res = execSync('npx tsc --init')
        // console.log(res.toString())
        fs_1.default.writeFileSync(path_1.default.join(process.cwd(), 'tsconfig.json'), config);
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
};
exports.tsInit = tsInit;
// export const setTsConfig = () => {
//   console.log('Configurating tsconfig...')
//   try {
//     // read file
//     const res = fs.readFileSync(
//       path.join(process.cwd(), 'tsconfig.json'),
//       'utf8'
//     )
//     console.log(res)
//     const config = JSON.parse(res)
//     const newConfig = {
//       ...config,
//       compilerOptions: {
//         ...config.compilerOptions,
//         rootDir: './src',
//         outDir: './build',
//       },
//     }
//     const stringifiedConfig = JSON.stringify(newConfig)
//     try {
//       // write file
//       const res = fs.writeFileSync(
//         path.join(process.cwd(), 'tsconfig.json'),
//         stringifiedConfig,
//         'utf8'
//       )
//     } catch (err) {
//       console.error(err)
//       process.exit(1)
//     }
//   } catch (err) {
//     console.error(err)
//     process.exit(1)
//   }
// }
