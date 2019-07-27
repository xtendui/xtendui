/**
 * https://www.gatsbyjs.org/docs/gatsby-config/
 */

const fs = require("fs")
const path = require("path")
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
    `gatsby-plugin-less`,
    `gatsby-plugin-catch-links`,
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
    // resolve files
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        "xtend-library": path.join(__dirname, ``),
        assets: path.join(__dirname, `src/gatsby/assets`),
        components: path.join(__dirname, `src/gatsby/components`),
      },
    },
    // resolve folders
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
        name: `doc`,
        path: `${__dirname}/src/gatsby/markdown/docs/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `faq`,
        path: `${__dirname}/src/gatsby/markdown/faq/`,
      },
    },
    // pages
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/gatsby/components/pages/`,
      },
    },
    // pages in /demos
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/gatsby/demos/`,
        ignore: [`inline/**/**`, `**/*.source.js?(x)`],
      },
    },
    // remark components
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
