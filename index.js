const viewOptions = require('/lib/view-options')

const register = function (server, opts = {}) {
  const { analyticsAccount, appVersion, assetPath, directories, } = opts
  server.register([
    {
      plugin: require('hapi-public-route'),
      options: {
        path: '/assets/{path*}',
        directories: [
          'public/static',
          'public/build',
          'node_modules/govuk-frontend/govuk',
          'node_modules/govuk-frontend/govuk/assets',
        ],
        tags: ['asset', 'always'],
      },
    },
    {
      plugin: require('hapi-robots'),
      options: {
        // will disallow everyone from every path:
        '*': ['/'],
      },
    },
    {
      plugin: require('@hapi/vision'),
      options: viewOptions({
        appVersion: pkg.version,
        assetPath: '/assets',
        analyticsAccount,

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
