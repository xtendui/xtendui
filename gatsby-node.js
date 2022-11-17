const path = require('path')
const markdownSlug = require('./src/gatsby/templates/snippets/markdown-slug.js').markdownSlug

// webpack config

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        src: path.join(__dirname, 'src'),
        static: path.join(__dirname, 'static'),
        // resolve xtendui import js and css
        xtendui: path.resolve(__dirname, './'),
      },
    },
  })
}

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPreset({
    name: `babel-preset-gatsby`, // https://github.com/gatsbyjs/gatsby/blob/master/packages/babel-preset-gatsby/README.md
  })
  actions.setBabelPreset({
    name: `@babel/preset-env`,
    options: {
      useBuiltIns: 'usage',
      corejs: require('core-js/package.json').version,
    },
  })
}

// markdown

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const docPageTemplate = path.resolve('src/gatsby/templates/doc-page.js')
  const docCategoryTemplate = path.resolve('src/gatsby/templates/doc-category.js')
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              type
              category
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
      const slug = markdownSlug(node)
      createPage({
        path: slug,
        component: node.frontmatter.parent ? docPageTemplate : docCategoryTemplate,
        context: {
          // for graphql query($type: String)
          title: node.frontmatter.title,
          type: node.frontmatter.type,
          category: node.frontmatter.category,
          parent: node.frontmatter.parent,
          parents: `/^${node.frontmatter.parent}$/`,
        },
      })
    })
  })
}

// contenful
if (
  process.env.NODE_ENV === 'development' ||
  !process.env.CONTENTFUL_SPACE_ID ||
  !process.env.CONTENTFUL_ACCESS_TOKEN
) {
  // contentful dummy content https://www.gatsbyjs.com/docs/recipes/sourcing-data/
  exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
    const contentfulAssets = [
      { title: 'dummy-asset', localFile: { publicURL: 'dummy-url' }, file: { url: 'dummy-url' } },
    ]
    contentfulAssets.forEach(contentfulAsset => {
      const node = {
        title: contentfulAsset.title,
        file: contentfulAsset.file,
        localFile: contentfulAsset.localFile,
        id: createNodeId(`ContentfulAsset-${contentfulAsset.name}`),
        internal: {
          type: 'ContentfulAsset',
          contentDigest: createContentDigest(contentfulAsset),
        },
      }
      actions.createNode(node)
    })
  }
}
