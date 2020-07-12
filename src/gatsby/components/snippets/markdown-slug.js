import kebabCase from 'lodash.kebabcase'

const markdownSlug = (page) => {
  const slugType = kebabCase(page.frontmatter.type)
  const slugCategory = kebabCase(page.frontmatter.category)
  const slugParent = kebabCase(page.frontmatter.parent)
  const slugTitle = kebabCase(page.frontmatter.title)
  let slug = `/${slugType}`
  if (page.frontmatter.category && page.frontmatter.category !== page.frontmatter.type) {
    slug += `/${slugCategory}`
  }
  if (page.frontmatter.parent) {
    slug += `/${slugParent}`
  }
  if (slugTitle !== slugType && slugTitle !== slugParent) {
    slug += `/${slugTitle}`
  }
  return slug
}

export { markdownSlug }
