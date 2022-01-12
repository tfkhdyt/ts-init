import path from 'path'
import { processNumber, setProcessNumber } from '../configs/cli.config'
// import fs from 'fs'

const cd = (projectName: string): void => {
  projectName = path.join(process.cwd(), projectName)
  try {
    console.log(`[${processNumber}] Opening Folder...`)
    setProcessNumber(processNumber + 1)
    process.chdir(projectName)
    // console.log('pindah folder sukses')
    // fs.writeFileSync('index.ts', 'kontol')
  } catch (err) {
    console.error(err)
  }
}

export default cd
