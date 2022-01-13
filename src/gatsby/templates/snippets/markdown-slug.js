const kebabCase = require('lodash/kebabcase')

module.exports = {
  markdownSlug: page => {
    const slugType = kebabCase(page.frontmatter.type)
    const slugParent = kebabCase(page.frontmatter.parent)
    const slugTitle = kebabCase(page.frontmatter.title)
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
