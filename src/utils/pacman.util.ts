import { exec } from 'child_process'
import { scripts } from '../libs/pacman.lib'

export const init = (): void => {
  exec(`${scripts.npm.init} -y`, (error, stdout, stderr): void => {
    if (error) throw error
    if (stdout) console.log(stdout)
    if (stderr) console.error(stderr)
  })
}
