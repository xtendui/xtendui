module.exports = {
  siteMetadata: {
    title: `Xtend library`,
    description: `Frontend library`,
    keywords: `css, html, js, front-end, library, plugin`
  },
  pathPrefix: `/xtend-library`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-component`]
      }
    }
  ],
};