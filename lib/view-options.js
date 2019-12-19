const path = require('path')
const nunjucks = require('nunjucks')
const folders = require('./find-njk-folders')

function compile (src, options) {
  const template = nunjucks.compile(src, options.environment)
  return (context) => template.render(context)
}

function prepare (options, next) {
  options.compileOptions.environment = nunjucks.configure(
    [
      path.join(options.relativeTo || process.cwd(), options.path), ...folders],
    {
      autoescape: true,
      watch: false
    })

  return next()
}

function viewOptions (options = {}) {
  const { context, isCached, relativeTo, viewPath } = options
  return {
    engines: {
      njk: { compile, prepare }
    },
    path: viewPath,
    relativeTo,
    isCached,
    context
  }
}

module.exports = viewOptions
