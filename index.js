const register = function (server, opts = {}) {
  server.register([
    require('./lib/public'),
    require('./lib/robots'),
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
