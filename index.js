const register = function (server, opts = {}) {
  server.register([
    {
      plugin: require('hapi-public-route'),
      options: {
        path: '/assets/{path*}',
        directories: [
          'public/static',
          'public/build',
          'node_modules/govuk-frontend/govuk',
          'node_modules/govuk-frontend/govuk/assets'
        ],
        tags: ['asset', 'always']
      }
    },
    {
      plugin: require('hapi-robots'),
      options: {
        // will disallow everyone from every path:
        '*': ['/']
      }
    },
    require('./lib/view')
  ])
}

const pkg = require('./package')

exports.plugin = {
  name: pkg.name,
  register,
  once: true,
  pkg
}
