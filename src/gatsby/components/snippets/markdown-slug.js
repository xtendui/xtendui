import kebabCase from 'lodash.kebabcase'

const markdownSlug = function(page) {
  const slugType = kebabCase(page.frontmatter.type)
  const slugParent = kebabCase(page.frontmatter.parent)
  const slugTitle = kebabCase(page.frontmatter.title)
  let slug = `/${slugType}`
  if (page.frontmatter.parent) {
    slug += `/${slugParent}`
  }
  if (slugTitle !== slugType && slugTitle !== slugParent) {
    slug += `/${slugTitle}`
  }
  return slug
}

export { markdownSlug }
