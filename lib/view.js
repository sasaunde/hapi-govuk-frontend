const { version } = require(`${process.cwd()}/package`)
const viewOptions = require('./view-options')

module.exports = (server, opts = {}) => {
  const { analyticsAccount, assetPath = '/assets', assetDirectories = [], serviceName = 'unknown', viewPath = '/', options = {}, context: additionalContext = {} } = opts

  const context = {
    appVersion: version,
    assetPath,
    serviceName,
    pageTitle: `${serviceName} - GOV.UK`,
    analyticsAccount
  }

  Object.assign(context, additionalContext)

  server.register([
    {
      plugin: require('hapi-public-route'),
      options: {
        path: `${assetPath}/{path*}`,
        directories: [
          'node_modules/govuk-frontend/govuk',
          'node_modules/govuk-frontend/govuk/assets',
          ...assetDirectories
        ],
        options
      }
    },
    {
      plugin: require('@hapi/vision'),
      options: viewOptions({
        realm: server.realm.parent,
        viewPath,
        context
      })
    }
  ])
}
