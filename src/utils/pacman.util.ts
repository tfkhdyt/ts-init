import { exec, execSync } from 'child_process'
import { stderr } from 'process'
import { scripts } from '../libs/pacman.lib'

export const init = (): void => {
  console.log('Initializing npm...')
  try {
    const res = execSync(`${scripts.npm.init} -y`)
    console.log(res.toString())
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

export const installDep = (prettier: boolean): void => {
  console.log('Installing dependencies...')
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
