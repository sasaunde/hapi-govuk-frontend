const pkg = require('./package')

exports.plugin = {
  name: pkg.name,
  register: require('./lib/view'),
  once: true,
  pkg
}
