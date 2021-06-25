const fs = require('fs')
const path = require('path')
const pack = JSON.parse(fs.readFileSync('package.json').toString())
const version = pack.version
const description = pack.description
const keywords = pack.keywords
require('dotenv').config()

module.exports = {
  flags: {
    DEV_SSR: true,
    PRESERVE_WEBPACK_CACHE: true,
  },
  siteMetadata: {
    siteUrl: 'https://xtendui.com',
    title: 'Xtend UI',
    description: description,
    keywords: keywords,
    author: 'Riccardo Caroli',
    image: '/social.png',
    version: version,
    npm: 'https://www.npmjs.com/package/xtendui',
    github: 'https://github.com/minimit/xtendui',
    twitter: 'https://twitter.com/xtendui',
    download: 'https://github.com/minimit/xtendui/releases',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-postcss',
    // sitemap
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        excludes: ['/hidden/**/*', '/demos/**/*'],
      },
    },
    // manifest
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Xtend UI',
        start_url: '/',
        background_color: '#0078ff',
        theme_color: '#0058C6',
        display: 'minimal-ui',
        icon: './static/favicon.svg',
        icon_options: {
          purpose: 'maskable any',
        },
        icons: [
          {
            src: './static/apple-touch-icon.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    // resolve
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './',
        aliases: {
          src: './src',
          static: './static',
          // resolve xtendui import js and css
          xtendui: path.resolve(__dirname, './'),
        },
      },
    },
    // filesystem
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
        path: 'src/gatsby/templates/pages/',
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
                  classes:
                    'xt-card text-base leading-snug px-6 py-5 my-5 xt-my-auto font-normal text-black xt-links-default rounded-md bg-gray-200 gatsby_note',
                },
                notePrimary: {
                  classes:
                    'xt-card text-base leading-snug px-6 py-5 my-5 xt-my-auto font-normal text-white xt-links-inverse rounded-md bg-primary-500 gatsby_note',
                },
              },
            },
          },
          {
            resolve: 'gatsby-remark-classes',
            options: {
              classMap: {
                link: 'xt-link',
                table: 'gatsby_table my-4 xt-my-auto w-full',
                'heading[depth=1]': 'xt-h1',
                'heading[depth=2]': 'xt-h2',
                'heading[depth=3]': 'xt-h3',
                'heading[depth=4]': 'xt-h4',
                'heading[depth=5]': 'xt-h5',
                'heading[depth=6]': 'xt-h6',
              },
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noopener noreferrer',
            },
          },
        ],
      },
    },
  ],
}

// contenful

if (process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN) {
  module.exports.plugins.push({
    resolve: 'gatsby-source-contentful',
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  })
}
