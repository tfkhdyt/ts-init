#!/usr/bin/env node
import { projectName, git, prettier } from './configs/cli.config'

import cd from './utils/cd.util'
import mkdir from './utils/mkdir.util'
import gitInit from './utils/git.util'
import { init } from './utils/pacman.util'

console.log('Project Name    : ' + projectName)
// console.log('Package Manager : ' + packageManager)
console.log('Git             : ' + git)
// console.log('No Confirmation : ' + yes)
console.log('Prettier        : ' + prettier + '\n')

mkdir(projectName)

cd(projectName)

if (git) {
  gitInit()
}

init()
