/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// write demos's and extensions's less and js

const glob = require('glob')
const writeFile = require('write')

let lessDemos = ''
const lessDemosGlob = new glob.Glob('demos/**/*.less', function (er, files) {
  for (let file of files) {
    lessDemos += `@import '~xtend-library/${file}';\n`
  }
})
lessDemosGlob.on('end', function(filepath) {
  writeFile('components/xtend-demos.less', lessDemos, function(err) {
    if (err) console.log(err)
  })
});

let lessExtensions = ''
const lessExtensionsGlob = new glob.Glob('extensions/**/*.less', function (er, files) {
  for (let file of files) {
    lessExtensions += `@import '~xtend-library/${file}';\n`
  }
})
lessExtensionsGlob.on('end', function(filepath) {
  writeFile('components/xtend-extensions.less', lessExtensions, function(err) {
    if (err) console.log(err)
  })
});

let jsDemos = ''
const jsDemosGlob = new glob.Glob('demos/**/*.js', function (er, files) {
  for (let file of files) {
    jsDemos += `import 'xtend-library/${file}';\n`
  }
})
jsDemosGlob.on('end', function(filepath) {
  writeFile('components/xtend-demos.js', jsDemos, function(err) {
    if (err) console.log(err)
  })
});

let jsExtensions = ''
const jsExtensionsGlob = new glob.Glob('extensions/**/*.js', function (er, files) {
  for (let file of files) {
    jsExtensions += `import 'xtend-library/${file}';\n`
  }
})
jsExtensionsGlob.on('end', function(filepath) {
  writeFile('components/xtend-extensions.js', jsExtensions, function(err) {
    if (err) console.log(err)
  })
});

// webpack config

/*
const webpack = require('webpack')
exports.onCreateWebpackConfig = ({getConfig, actions}) => {
  const config = getConfig()
  // disable HotModuleReplacementPlugin
  console.log(config);
  const found = config.plugins.find(
    plugin => plugin instanceof webpack.HotModuleReplacementPlugin
  )
  if (found) {
    found.options = {
      requestTimeout: 99999999
    }
  }
  const extraConfig = {
    devServer: {
      disableHostCheck: true,
      hotOnly: false,
      hot: false,
      inline: false,
    },
  };
  actions.replaceWebpackConfig(merge(config, extraConfig));
}
*/
/*
exports.onCreateWebpackConfig = ({plugins, actions}) => {
  const {setWebpackConfig} = actions;
  setWebpackConfig({
    plugins: [
      plugins.define({
        hotModuleReplacement: false
      })
    ]
  });
  console.log(plugins);
};
*/
/*
exports.onCreateWebpackConfig = ({getConfig, actions}) => {
  const config = getConfig()
  const extraConfig = {
    devServer: {
      disableHostCheck: true,
      hotOnly: false,
      hot: false,
      inline: false,
    },
  };
  actions.replaceWebpackConfig(merge(config, extraConfig));
  console.log(getConfig());
}
*/
/*
exports.onCreateWebpackConfig = ({getConfig, stage}) => {
  const config = getConfig()
  // https://github.com/gatsbyjs/gatsby/issues/8102 // FIX hot reload when using iframe
  config.devServer = {
    ...config.devServer,
    hot: false,
    inline: false
  }
}
*/

exports.onCreateWebpackConfig = ({getConfig, stage}) => {
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

const path = require('path')
//const kebabCase = require('lodash.kebabcase');

exports.createPages = ({actions, graphql}) => {
  const {createPage} = actions
  const docTemplate = path.resolve(`src/components/templates/doc.js`)
  /* COMMENTED CATEGORIES AND TAGS
  const tagTemplate = path.resolve(`src/components/templates/doc-tag.js`)
  const categoryTemplate = path.resolve(`src/components/templates/doc-category.js`)
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
              path
              type
              parent
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
      if (node.frontmatter.type === 'docs' || node.frontmatter.type === 'faq') {
        createPage({
          path: node.frontmatter.path, // needs gatsby-source-filesystem resolve name
          component: docTemplate,
          context: {
            type: node.frontmatter.type, // for query($type: String) { // put also on return graphql
            parent: node.frontmatter.parent, // for query($parent: String) { // put also on return graphql
          },
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
