/**
 * https://www.gatsbyjs.org/docs/gatsby-config/
 */

const fs = require('fs')
const path = require('path')
const pack = JSON.parse(fs.readFileSync('package.json').toString())
const version = pack.version
const description = pack.description

module.exports = {
  siteMetadata: {
    title: 'Xtend UI',
    description: description,
    author: 'Riccardo Caroli',
    version: version,
    npm: 'https://www.npmjs.com/package/xtend-ui',
    github: 'https://github.com/minimit/xtend-ui',
    twitter: 'https://twitter.com/beaver82minimit',
    download: 'https://github.com/minimit/xtend-ui/releases',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-postcss',
    // manifest
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'xtend-ui',
        short_name: 'Xtend',
        start_url: '/',
        background_color: '#0078ff',
        theme_color: '#0058C6',
        display: 'minimal-ui',
        icon: './static/apple-touch-icon.png',
        icon_options: {
          purpose: `maskable any`,
        },
      },
    },
    `gatsby-plugin-offline`,
    // resolve
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './',
        aliases: {
          assets: './src/gatsby/assets',
          components: './src/gatsby/components',
          // resolve xtend-ui import js and css
          'xtend-ui': path.resolve(__dirname, './'),
        },
      },
    },
    // resolve graphql
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: './src/',
      },
    },
    // pages
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: './src/gatsby/components/pages/',
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: './src/gatsby/code/',
        ignore: ['vanilla/**/**'],
      },
    },
    // remark
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-component',
            options: { components: ['demo'] },
          },
          {
            resolve: 'gatsby-remark-custom-blocks',
            options: {
              blocks: {
                noteDefault: {
                  classes: 'card card-block card-block-sm text-default rounded-md bg-gray-200 gatsby_note',
                },
                notePrimary: {
                  classes: 'card card-block card-block-sm text-inverse rounded-md bg-accent-500 gatsby_note',
                },
              },
            },
          },
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                link: 'link',
              },
            },
          },
        ],
      },
    },
  ],
}
