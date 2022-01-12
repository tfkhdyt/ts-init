import { exec, execSync } from 'child_process'
import { processNumber, setProcessNumber } from '../configs/cli.config'

const gitInit = (): void => {
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

export default gitInit
