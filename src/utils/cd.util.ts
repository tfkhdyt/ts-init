import path from 'path'
// import fs from 'fs'

const cd = (projectName: string): void => {
  projectName = path.join(process.cwd(), projectName)
  try {
    process.chdir(projectName)
    // console.log('pindah folder sukses')
    // fs.writeFileSync('index.ts', 'kontol')
  } catch (err) {
    console.error(err)
  }
}

export default cd
