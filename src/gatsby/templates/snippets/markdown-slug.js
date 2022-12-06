const _ = require('lodash')

module.exports = {
  markdownSlug: page => {
    const slugType = _.kebabCase(page.frontmatter.type)
    const slugParent = _.kebabCase(page.frontmatter.parent)
    const slugTitle = _.kebabCase(page.frontmatter.title)
    let slug = ''
    if (page.frontmatter.type) {
      slug += `/${slugType}`
    }
    if (page.frontmatter.parent) {
      slug += `/${slugParent}`
    }
    if (slugTitle !== slugType && slugTitle !== slugParent) {
      slug += `/${slugTitle}`
    }
    return slug
  },
}
