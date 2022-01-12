import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import { processNumber, setProcessNumber } from '../configs/cli.config'

export const tsInit = (): void => {
  console.log(`[${processNumber}] Initializing TypeScript...`)
  setProcessNumber(processNumber + 1)
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
  }`
  try {
    // const res = execSync('npx tsc --init')
    // console.log(res.toString())
    fs.writeFileSync(path.join(process.cwd(), 'tsconfig.json'), config)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

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
