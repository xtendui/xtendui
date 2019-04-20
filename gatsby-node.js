/**
 * https://www.gatsbyjs.org/docs/node-apis/
 * https://www.gatsbyjs.org/docs/node-creation/
 */

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  //console.log(node.relativePath)
  // pages
  if (node.sourceInstanceName === `pages`) {
    // slug
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    // name
    const name = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `name`,
      value: name,
    })
  }
}
