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
    //FAST_REFRESH: true,
  },
  siteMetadata: {
    siteUrl: 'https://xtendui.com',
    title: 'Xtend UI',
    version: version,
    description: description,
    keywords: keywords,
    author: 'Riccardo Caroli',
    image: '/social-v1.png',
    npm: 'https://www.npmjs.com/package/xtendui',
    github: 'https://github.com/xtendui/xtendui',
    twitter: 'https://twitter.com/xtendui',
    download: 'https://github.com/xtendui/xtendui/releases',
    uuid: require('uuid').v1(),
  },
  plugins: [
    'gatsby-plugin-image',
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
    // webapp
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Xtend UI',
        start_url: '/',
        background_color: '#0078ff',
        theme_color: '#0058C6',
        display: 'minimal-ui',
        include_favicon: false, // favicon with helmet
        icon: './static/apple-touch-icon.png', // icons generated with this 512x512
        icon_options: {
          purpose: 'maskable any',
        },
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
                blockquote:
                  'gatsby_note xt-card text-base leading-snug px-6 py-5 my-5 xt-my-auto font-normal rounded-md bg-gray-100',
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

if (process.env.NODE_ENV !== 'development' && process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN) {
  module.exports.plugins.push({
    resolve: 'gatsby-source-contentful',
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      downloadLocal: true,
    },
  })
}
