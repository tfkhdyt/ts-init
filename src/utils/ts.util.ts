import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

export const tsInit = (): void => {
  console.log('Initializing TypeScript...')
  try {
    const res = execSync('npx tsc --init')
    console.log(res.toString())
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

export const setTsConfig = () => {
  console.log('Configurating tsconfig...')
  try {
    const res = fs.readFileSync(
      path.join(process.cwd(), 'tsconfig.json'),
      'utf-8'
    )
    const config = JSON.parse(res)
    const newConfig = {
      ...config,
      compilerOptions: {
        ...config.compilerOptions,
        rootDir: './src',
        outDir: './build',
      },
    }
  } catch (err) {}
}
