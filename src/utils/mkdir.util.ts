import fs from 'fs'
import path from 'path'

const mkdir = (projectName: string): void => {
  const isProjectExists = fs.existsSync(path.join(process.cwd(), projectName))

  if (isProjectExists) {
    console.error('ERROR: Project is already exists!')
    process.exit(1)
  } else {
    console.log(`Creating ${projectName}...`)
    fs.mkdirSync(projectName)
    if (projectName === 'src') {
      fs.writeFileSync('./src/index.ts', "console.log('Hello world!')")
    }
  }
}

export default mkdir
