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
    image: 'https://xtendui.com/social.jpg',
    version: version,
    npm: 'https://www.npmjs.com/package/xtendui',
    github: 'https://github.com/minimit/xtendui',
    twitter: 'https://twitter.com/xtendui',
    download: 'https://github.com/minimit/xtendui/releases',
  },
  plugins: [
    'gatsby-plugin-remove-serviceworker',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-postcss',
    // manifest
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Xtend UI',
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
    // resolve
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './',
        aliases: {
          assets: './src/gatsby/assets',
          components: './src/gatsby/components',
          // resolve xtendui import js and css
          xtendui: path.resolve(__dirname, './'),
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
                  classes: 'card card-block py-4 px-5 text-default rounded-md bg-gray-200 gatsby_note',
                },
                notePrimary: {
                  classes: 'card card-block py-4 px-5 text-inverse rounded-md bg-accent-500 gatsby_note',
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
