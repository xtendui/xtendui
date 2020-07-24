var merge = require('lodash.merge')

module.exports = function (fork = {}) {
  // override theme waiting for https://github.com/tailwindlabs/tailwindcss/issues/677
  const base = {
    backgroundColor: ['responsive', 'hover', 'active', 'focus', 'in', 'out'],
  }
  return merge(base, fork)
}
