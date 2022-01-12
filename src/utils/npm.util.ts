import { readFileSync, writeFileSync } from 'fs'
import path from 'path'
import { processNumber, setProcessNumber } from '../configs/cli.config'

export const setScript = () => {
  try {
    console.log(`[${processNumber}] Configurating package.json...`)
    setProcessNumber(processNumber + 1)
    const res = readFileSync(path.join(process.cwd(), 'package.json'), 'utf8')
    const parsed = JSON.parse(res)
    const newConfig = {
      ...parsed,
      scripts: {
        dev: "tsc-watch --onSuccess 'node ./build/index.js'",
        start: 'node ./build/index.js',
      },
      prettier: {
        semi: false,
        singleQuote: true,
      },
      main: './src/index.ts',
    }
    try {
      writeFileSync(
        path.join(process.cwd(), 'package.json'),
        JSON.stringify(newConfig)
      )
    } catch (error) {
      console.log(error)
      process.exit(1)
    }
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
