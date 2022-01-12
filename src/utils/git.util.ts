import { exec } from 'child_process'

const gitInit = (): void => {
  exec('git init', (error, stdout, stderr): void => {
    if (error) throw error
    if (stdout) console.log(stdout)
    if (stderr) console.error(stderr)
  })
}

export default gitInit
