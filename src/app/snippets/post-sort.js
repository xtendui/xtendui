export const postSort = (a, b) => {
  let order
  if (!b.post.frontmatter.date && a.post.frontmatter.date) {
    order = 1
  }
  if (b.post.frontmatter.date && !a.post.frontmatter.date) {
    order = -1
  } else if (b.post.frontmatter.date && a.post.frontmatter.date) {
    order = b.post.frontmatter.date.localeCompare(a.post.frontmatter.date)
  }
  if (!order) {
    order = a.post.frontmatter.title.localeCompare(b.post.frontmatter.title)
  }
  return order
}
