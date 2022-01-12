import { execSync } from 'child_process'
import { writeFileSync } from 'fs'
import { processNumber, setProcessNumber } from '../configs/cli.config'

export const gitInit = (): void => {
  console.log(`[${processNumber}] Initializing git...`)
  setProcessNumber(processNumber + 1)
  try {
    const res = execSync('git init')
    console.log(res.toString())
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

export const createGitIgnore = (): void => {
  console.log(`[${processNumber}] Creating .gitignore...`)
  setProcessNumber(processNumber + 1)
  try {
    writeFileSync(
      './.gitignore',
      `**/node_modules
**/build`
    )
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}
