const { version } = require(`${process.cwd()}/package`)
const viewOptions = require('./view-options')

module.exports = (server, opts = {}) => {
  const { analyticsAccount, assetPath = '/assets', assetDirectories = [], serviceName = 'unknown', viewPath = '/', options = {}, context: additionalContext = {} } = opts

  // Fool this partial into thinking it's hapi realm is it's parent realm so that the @hapi/vision plugin can be embedded here
  // see https://github.com/hapijs/hapi/issues/3066
  server.realm = server.realm.parent

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
        viewPath,
        context
      })
    }
  ])
}
