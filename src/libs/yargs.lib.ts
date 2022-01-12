import yargs from 'yargs/yargs'

export const argv = yargs(process.argv.slice(2))
  .options({
    yarn: { type: 'boolean', default: false },
    git: { type: 'boolean', default: false },
    y: { type: 'boolean', default: false, alias: 'yes' },
    p: { type: 'boolean', default: true, alias: 'prettier' },
  })
  .parseSync()
