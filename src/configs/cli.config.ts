import { argv } from '../libs/yargs.lib'

const projectName: string = argv._[0].toString()
const packageManager: string = argv.yarn ? 'yarn' : 'npm'
const git: boolean = argv.git
const yes: boolean = argv.y
const prettier: boolean = argv.p

if (!projectName) {
  console.error('You should pass the project name!')
  process.exit(1)
}

export {
  projectName,
  packageManager,
  git,
  yes,
  prettier
}
