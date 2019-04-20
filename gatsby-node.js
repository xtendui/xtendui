/**
 * https://www.gatsbyjs.org/docs/node-apis/
 * https://www.gatsbyjs.org/docs/node-creation/
 */

// markdown

const path = require("path")
const kebabCase = require('lodash.kebabcase');

exports.createPages = ({actions, graphql}) => {
  const {createPage} = actions
  const docTemplate = path.resolve(`src/gatsby/templates/doc.js`)
  const tagTemplate = path.resolve(`src/gatsby/templates/doc-tag.js`)
  const categoryTemplate = path.resolve(`src/gatsby/templates/doc-category.js`)
  const tagSet = new Set()
  const categorySet = new Set()
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              type
              tags
              categories
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.allMarkdownRemark.edges.forEach(({node}) => {
      if (node.frontmatter.type === 'doc') {
        createPage({
          path: node.frontmatter.path,
          component: docTemplate,
          context: {},
        })
        if (node.frontmatter.tags) {
          node.frontmatter.tags.forEach(tag => {
            tagSet.add(tag)
          });
        }
        if (node.frontmatter.categories) {
          node.frontmatter.categories.forEach(category => {
            categorySet.add(category)
          })
        }
        const tagList = Array.from(tagSet)
        tagList.forEach(tag => {
          createPage({
            path: `/tags/${kebabCase(tag)}/`,
            component: tagTemplate,
            context: {
              tag
            }
          })
        })
        const categoryList = Array.from(categorySet)
        categoryList.forEach(category => {
          createPage({
            path: `/categories/${kebabCase(category)}/`,
            component: categoryTemplate,
            context: {
              category
            }
          })
        })
      }
    })
  })
}

