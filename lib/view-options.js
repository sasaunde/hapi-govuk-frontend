const nunjucks = require('nunjucks')
const folders = require('./find-njk-folders')

function njkOptions (options) {
  const { includePaths = [] } = options

  function compile (src, options) {
    const template = nunjucks.compile(src, options.environment)
    return (context) => template.render(context)
  }

  function prepare (options, next) {
    const { path } = options
    const paths = [`${process.cwd()}/${path}`, ...includePaths, ...folders]
    options.compileOptions.environment = nunjucks.configure(
      paths,
      {
        autoescape: true,
        watch: false
      })

    return next()
  }

  return { compile, prepare }
}

function viewOptions (options = {}) {
  const { context, viewPath: path } = options
  return {
    engines: {
      njk: njkOptions(options)
    },
    path,
    context
  }
}

module.exports = viewOptions
