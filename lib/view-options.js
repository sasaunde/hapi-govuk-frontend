const path = require('path')
const nunjucks = require('nunjucks')
const config = require('../config')
const pkg = require('../../package.json')
const analyticsAccount = config.analyticsAccount

function viewOptions (options = {}) {
  const { analyticsAccount, appVersion, assetPath, serviceName, directories } = options
  return {
    engines: {
      njk: {
        compile: (src, options) => {
          const template = nunjucks.compile(src, options.environment)

          return (context) => {
            return template.render(context)
          }
        },

        prepare: (options, next) => {
          options.compileOptions.environment = nunjucks.configure([
            path.join(options.relativeTo || process.cwd(), options.path),
            'node_modules/govuk-frontend/govuk',
            'node_modules/govuk-frontend/govuk/components/',
            'node_modules/defra-hapi-modules/source/modules/',
            'node_modules/defra-hapi-handlers/source/',
          ], {
            autoescape: true,
            watch: false,
          })

          return next()
        },
      },
    },
    path: '../modules',
    relativeTo: __dirname,
    isCached: !config.isDev,
    context: {
      appVersion,
      assetPath,
      serviceName: config.serviceName,
      pageTitle: config.serviceName + ' - GOV.UK',
      analyticsAccount,
    },
  }
}

module.exports = viewOptions
