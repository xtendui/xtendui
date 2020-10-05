const merge = require('lodash.merge')

module.exports = function (custom = {}) {
  const base = {
    backgroundColor: ({ after }) => after(['active'], 'hover'),
    gradientColorStops: ({ after }) => after(['active'], 'hover'),
    backgroundOpacity: ({ after }) => after(['active'], 'hover'),
    borderColor: ({ after }) => after(['active'], 'hover'),
    borderOpacity: ({ after }) => after(['active'], 'hover'),
    boxShadow: ({ after }) => after(['active'], 'hover'),
    opacity: ({ after }) => after(['active'], 'hover'),
    textColor: ({ after }) => after(['active'], 'hover'),
    textOpacity: ({ after }) => after(['active'], 'hover'),
    textDecoration: ({ after }) => after(['active'], 'hover'),
    scale: ({ after }) => after(['active'], 'hover'),
    rotate: ({ after }) => after(['active'], 'hover'),
    translate: ({ after }) => after(['active'], 'hover'),
    skew: ({ after }) => after(['active'], 'hover'),
  }
  return merge(base, custom)
}
