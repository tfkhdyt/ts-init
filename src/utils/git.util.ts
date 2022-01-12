import { exec, execSync } from 'child_process'

const gitInit = (): void => {
  console.log('Initializing git...')
  try {
    const res = execSync('git init')
    console.log(res.toString())
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

export default gitInit
