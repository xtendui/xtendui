/**
 * https://www.gatsbyjs.org/docs/gatsby-config/
 */

const fs = require('fs')
const path = require('path')
const version = JSON.parse(fs.readFileSync('package.json')).version

module.exports = {
  siteMetadata: {
    title: `Xtend`,
    description: `Xtend advanded frontend library`,
    author: `Riccardo Caroli`,
    version: version,
    github: `https://github.com/minimit/xtend-library`,
    download: `https://github.com/minimit/xtend-library/releases`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-less`,
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        "xtend-library": path.join(__dirname, `src/scripts/xtend.js`),
        assets: path.join(__dirname, `src/gatsby/assets`),
        components: path.join(__dirname, `src/gatsby/components`),
        pages: path.join(__dirname, `src/gatsby/pages`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/gatsby/assets/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/gatsby/pages`,
        ignore: [`**/*.source.js?(x)`],
      },
    },
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/gatsby/assets/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `components`,
        path: `${__dirname}/src/gatsby/components/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/gatsby/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `templates`,
        path: `${__dirname}/src/gatsby/templates/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `doc`,
        path: `${__dirname}/src/gatsby/docs/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `faq`,
        path: `${__dirname}/src/gatsby/faq/`,
      },
    },
  ],
}
