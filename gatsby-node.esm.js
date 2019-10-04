/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

import path from 'path'
import glob from 'glob'
import writeFile from 'write'
import { markdownSlug } from './src/gatsby/components/markdown-slug.js'

// write xtend less

let lessCore = ''
const lessCoreGlob = new glob.Glob('src/core/**/*.less', { ignore: ['**/*-setup.less'] }, function (er, files) {
  for (const file of files) {
    lessCore += `@import '~xtend-library/${file}';\n`
  }
})
lessCoreGlob.on('end', function (filepath) {
  writeFile('./src/xtend-core.less', lessCore, function (err) {
    if (err) console.log(err)
  })
})

let lessDemo = ''
const lessDemoGlob = new glob.Glob('src/demo/**/*.less', function (er, files) {
  for (const file of files) {
    lessDemo += `@import '~xtend-library/${file}';\n`
  }
})
lessDemoGlob.on('end', function (filepath) {
  writeFile('./src/xtend-demo.less', lessDemo, function (err) {
    if (err) console.log(err)
  })
})

let lessExtension = ''
const lessExtensionGlob = new glob.Glob('src/extension/**/*.less', function (er, files) {
  for (const file of files) {
    lessExtension += `@import '~xtend-library/${file}';\n`
  }
})
lessExtensionGlob.on('end', function (filepath) {
  writeFile('./src/xtend-extension.less', lessExtension, function (err) {
    if (err) console.log(err)
  })
})

// write xtend js

let jsCore = ''
const jsCoreGlob = new glob.Glob('src/core/**/*.js', function (er, files) {
  jsCore += 'if (typeof window !== \'undefined\') {\n'
  for (const file of files) {
    jsCore += `  require('xtend-library/${file}')\n`
  }
  jsCore += '}'
  jsCore += '\n'
})
jsCoreGlob.on('end', function (filepath) {
  writeFile('./src/xtend-core.js', jsCore, function (err) {
    if (err) console.log(err)
  })
})

let jsDemo = 'if (typeof window !== \'undefined\') {\n'
const jsDemoGlob = new glob.Glob('src/demo/**/*.js', function (er, files) {
  for (const file of files) {
    jsDemo += `  require('xtend-library/${file}')\n`
  }
  jsDemo += '}'
  jsDemo += '\n'
})
jsDemoGlob.on('end', function (filepath) {
  writeFile('./src/xtend-demo.js', jsDemo, function (err) {
    if (err) console.log(err)
  })
})

let jsExtension = 'if (typeof window !== \'undefined\') {\n'
const jsExtensionGlob = new glob.Glob('src/extension/**/*.js', function (er, files) {
  for (const file of files) {
    // const obj = path.parse(file); ${obj.dir}/${obj.name}
    jsExtension += `  require('xtend-library/${file}')\n`
  }
  jsExtension += '}'
  jsExtension += '\n'
})
jsExtensionGlob.on('end', function (filepath) {
  writeFile('./src/xtend-extension.js', jsExtension, function (err) {
    if (err) console.log(err)
  })
})

// webpack config

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  // https://github.com/gatsbyjs/gatsby/issues/11934
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }
}

// markdown

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const docTemplate = path.resolve('src/gatsby/components/templates/doc.js')
  /* COMMENTED CATEGORIES AND TAGS
  const tagTemplate = path.resolve(`src/gatsby/components/templates/doc-tag.js`)
  const categoryTemplate = path.resolve(`src/gatsby/components/templates/doc-category.js`)
  const tagSet = new Set()
  const categorySet = new Set()
  */
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
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
      createPage({
        path: markdownSlug(node), // needs gatsby-source-filesystem resolve name
        component: docTemplate,
        context: {
          type: node.frontmatter.type, // for query($type: String) { // put also on return graphql
          parent: node.frontmatter.parent, // for query($parent: String) { // put also on return graphql
          title: node.frontmatter.title // for query($title: String) { // put also on return graphql
        }
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
    })
  })
}
