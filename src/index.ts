#!/usr/bin/env node
import { projectName, git, prettier } from './configs/cli.config'

import cd from './utils/cd.util'
import mkdir from './utils/mkdir.util'
import gitInit from './utils/git.util'
import { init, installDep } from './utils/pacman.util'
import { tsInit } from './utils/ts.util'
import { setScript } from './utils/npm.util'

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

installDep(prettier)

mkdir('build')

mkdir('src')

tsInit()

// setTsConfig()

setScript()

console.log(`\n${projectName} has been created!`)
