/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// https://github.com/gatsbyjs/gatsby/issues/11934

exports.onCreateWebpackConfig = ({getConfig, stage}) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }
}

// markdown

const path = require("path")
const kebabCase = require('lodash.kebabcase');

exports.createPages = ({actions, graphql}) => {
  const {createPage} = actions
  const faqTemplate = path.resolve(`src/gatsby/templates/faq.js`)
  const docTemplate = path.resolve(`src/gatsby/templates/doc.js`)
  /* COMMENTED CATEGORIES AND TAGS
  const tagTemplate = path.resolve(`src/gatsby/templates/doc-tag.js`)
  const categoryTemplate = path.resolve(`src/gatsby/templates/doc-category.js`)
  const tagSet = new Set()
  const categorySet = new Set()
  */
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
      if (node.frontmatter.type === 'faq') {
        createPage({
          path: node.frontmatter.path,
          component: faqTemplate,
          context: {},
        })
      } else if (node.frontmatter.type === 'docs') {
        createPage({
          path: node.frontmatter.path,
          component: docTemplate,
          context: {},
        })
        /* COMMENTED CATEGORIES AND TAGS
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
            path: `/docs/${kebabCase(category)}/`,
            component: categoryTemplate,
            context: {
              category
            }
          })
        })
        */
      }
    })
  })
}

