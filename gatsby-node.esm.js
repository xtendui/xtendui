/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

import path from 'path'
import { markdownSlug } from './src/gatsby/components/snippets/markdown-slug.js'
require('./build/less.js')
require('./build/js.js')

// webpack config

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        // resolve xtend-library js and less import
        'xtend-library': path.resolve(__dirname, './'),
        // https://github.com/gatsbyjs/gatsby/issues/11934
        'react-dom': '@hot-loader/react-dom',
      },
    },
  })
  /*
  // https://github.com/gatsbyjs/gatsby/issues/14882
  let config = getConfig()
  config.resolve.alias['xtend-library'] = path.resolve(__dirname, './');
  actions.replaceWebpackConfig(config)
  */
  //console.log(getConfig())
}

// markdown

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const docPageTemplate = path.resolve('src/gatsby/components/templates/doc-page.js')
  const docListingTemplate = path.resolve('src/gatsby/components/templates/doc-listing.js')
  return graphql(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            frontmatter {
              type
              parent
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      let template = docPageTemplate
      if (!node.frontmatter.parent) {
        template = docListingTemplate
      }
      createPage({
        path: markdownSlug(node), // needs gatsby-source-filesystem resolve name
        component: template,
        context: {
          type: node.frontmatter.type, // for query($type: String) { // put also on return graphql
          parent: node.frontmatter.parent, // for query($parent: String) { // put also on return graphql
          parents: '/' + node.frontmatter.parent + '/', // for query($parents: String) { // put also on return graphql
          title: node.frontmatter.title, // for query($title: String) { // put also on return graphql
        },
      })
    })
  })
}
