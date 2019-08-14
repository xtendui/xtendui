/**
 * https://www.gatsbyjs.org/docs/gatsby-config/
 */

const fs = require("fs")
const version = JSON.parse(fs.readFileSync('package.json')).version

module.exports = {
  siteMetadata: {
    title: `Xtend`,
    description: `Xtend advanded frontend library`,
    author: `Riccardo Caroli`,
    version: version,
    npm: `https://www.npmjs.com/package/xtend-library`,
    github: `https://github.com/minimit/xtend-library`,
    download: `https://github.com/minimit/xtend-library/releases`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-less`,
    // manifest
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Xtend`,
        short_name: `docs`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#fa1664`,
        display: `minimal-ui`,
        icon: `src/gatsby/assets/images/favicon.png`,
      },
    },
    // resolve js and less
    {
      resolve: `gatsby-plugin-module-resolver`,
      options: {
        root: `./`,
        aliases: {
          'xtend-library': `./`,
          assets: `./src/gatsby/assets`,
          components: `./src/gatsby/components`,
        },
      },
    },
    // resolve markdown
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `doc`,
        path: `./src/gatsby/markdown/docs/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `faq`,
        path: `./src/gatsby/markdown/faq/`,
      },
    },
    // pages
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `./src/gatsby/components/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `./src/gatsby/demos/`,
        ignore: [`inline/**/**`, `**/*.source.js?(x)`],
      },
    },
    // remark
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-component`,
            options: {components: [`demo`]},
          },
        ],
      },
    },
  ],
}
