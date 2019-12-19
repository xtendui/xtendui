/**
 * https://www.gatsbyjs.org/docs/gatsby-config/
 */

const fs = require('fs')
const version = JSON.parse(fs.readFileSync('package.json').toString()).version

module.exports = {
  siteMetadata: {
    title: 'Xtend',
    description: 'Xtend advanded frontend library',
    author: 'Riccardo Caroli',
    version: version,
    npm: 'https://www.npmjs.com/package/xtend-library',
    github: 'https://github.com/minimit/xtend-library',
    download: 'https://github.com/minimit/xtend-library/releases',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-less',
    // manifest
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Xtend',
        short_name: 'docs',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0078ff',
        display: 'minimal-ui',
        icon: 'src/gatsby/assets/images/favicon.png',
      },
    },
    // resolve js and css
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './',
        aliases: {
          'xtend-library': './', // resolve xtend-library gatsby
          assets: './src/gatsby/assets',
          components: './src/gatsby/components',
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
                  classes: 'note note-default note-background',
                },
                notePrimary: {
                  classes: 'note note-primary note-background',
                },
                noteError: {
                  classes: 'note note-error note-background',
                },
                noteSuccess: {
                  classes: 'note note-success note-background',
                },
              },
            },
          },
        ],
      },
    },
  ],
}
