import { exec, execSync } from 'child_process'
import { stderr } from 'process'
import { processNumber, setProcessNumber } from '../configs/cli.config'
import { scripts } from '../libs/pacman.lib'

export const init = (): void => {
  console.log(`[${processNumber}] Initializing npm...`)
  setProcessNumber(processNumber + 1)
  try {
    const res = execSync(`${scripts.npm.init} -y`)
    console.log(res.toString())
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

export const installDep = (prettier: boolean): void => {
  console.log(`[${processNumber}] Installing dependencies...`)
  setProcessNumber(processNumber + 1)
  try {
    const res = execSync(
      `npm i typescript tsc-watch ${prettier && 'prettier'} --save-dev`
    )
    console.log(res.toString())
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}
