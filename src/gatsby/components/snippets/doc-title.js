const docTitle = data => {
  let title = data.post.frontmatter.title
  title = title
    .split(/[\s-]+/)
    .map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
    .join(' ')
  title = data.post.frontmatter.parent && data.post.frontmatter.parent !== data.post.frontmatter.title ? `${data.post.frontmatter.parent} ${title}` : title
  title += data.post.frontmatter.category && data.post.frontmatter.category !== data.post.frontmatter.title ? ` -  ${data.post.frontmatter.category}` : ''
  title += data.post.frontmatter.type && data.post.frontmatter.type !== data.post.frontmatter.title ? ` ${data.post.frontmatter.type}` : ''
  return title
}

export { docTitle }
