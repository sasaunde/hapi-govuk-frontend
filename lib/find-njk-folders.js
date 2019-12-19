const glob = require('glob')

const moduleTemplates = glob.sync(`${process.cwd()}/node_modules/**/*.njk`)

const macroFolders = [...new Set(moduleTemplates
  .filter((file) => file.endsWith('/macro.njk'))
  .map((file) => file
    .split('/')
    .slice(0, -2)
    .join('/')
  ))]

const folders = moduleTemplates
  .reduce((folders = [], file) => {
    if (!macroFolders.filter((folder) => file.startsWith(folder)).length) {
      const folder = file
        .split('/')
        .slice(0, -1)
        .join('/')
      if (!folders.includes(folder)) {
        folders.push(folder)
      }
    }
    return folders
  }, macroFolders)
  .map((folder) => folder.substring(2))
  .sort()

module.exports = folders
