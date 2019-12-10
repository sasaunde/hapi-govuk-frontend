const viewOptions = require('/lib/view-options')

const register = function (server, opts = {}) {
  const { analyticsAccount, appVersion, assetPath, assetDirectories, viewDirectories} = opts
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
        options: {
          tags: ['asset', 'always']
        },
      },
    },
    {
      plugin: require('@hapi/vision'),
      options: viewOptions({
        appVersion,
        assetPath,
        analyticsAccount,
        directories: [
          'node_modules/govuk-frontend/govuk',
          'node_modules/govuk-frontend/govuk/components/',
          ...viewDirectories
        ]
      }),
    },
  ])
}

const pkg = require('./package')

exports.plugin = {
  name: pkg.name,
  register,
  once: true,
  pkg,
}
