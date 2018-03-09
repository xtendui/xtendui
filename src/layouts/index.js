import React from 'react'
import Helmet from 'react-helmet'

import 'styles/theme.css'
import 'assets/prism.css'
import 'prismjs/prism.js'
import favicon from 'assets/favicon.ico'
import favicon152 from 'assets/favicon-152x152.png'

import Header from 'layouts/header'
import Footer from 'layouts/footer'

// component

const Layout = ({ children, data }) => {
  return (
    <div>

      <Helmet>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="viewport"
              content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"/>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="keywords" content={data.site.siteMetadata.keywords} />
        <link rel="shortcut icon" href={favicon} />
        <link rel="apple-touch-icon" sizes="152x152" src={favicon152}/>
      </Helmet>

      <div className="site-wrapper">
          <header className="site-header">
            <Header data={ data } />
          </header>
          <main className="site-main">
            {children()}
          </main>
          <footer className="site-footer">
            <Footer />
          </footer>
      </div>

    </div>
  );
}
export default Layout

// query

export const query = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          ...AllMarkdownFragment
        }
      }
    }
  }
  fragment AllMarkdownFragment on MarkdownRemark {
    id
    frontmatter {
      title
      date(formatString: "DD MMMM, YYYY")
    }
    fields {
      slug
    }
    excerpt
  }
`;