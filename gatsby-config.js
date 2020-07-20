/**
 * https://www.gatsbyjs.org/docs/gatsby-config/
 */

const fs = require('fs')
const path = require('path')
const version = JSON.parse(fs.readFileSync('package.json').toString()).version

module.exports = {
  siteMetadata: {
    title: 'Xtend',
    description: 'Xtend library',
    author: 'Riccardo Caroli',
    version: version,
    npm: 'https://www.npmjs.com/package/xtend-library',
    github: 'https://github.com/minimit/xtend-library',
    twitter: 'https://twitter.com/beaver82minimit',
    download: 'https://github.com/minimit/xtend-library/releases',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-postcss',
    'gatsby-plugin-less',
    // manifest
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Xtend Library',
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
          // resolve xtend-library import js and less
          'xtend-library': path.resolve(__dirname, './'),
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
                  classes: 'note note-default note-background gatbsy_note',
                },
                notePrimary: {
                  classes: 'note note-primary note-background gatbsy_note',
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
