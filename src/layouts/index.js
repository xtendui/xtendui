import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import '../styles/theme.css'
import favicon from '../images/favicon.ico';
import favicon152 from '../images/favicon-152x152.png';

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
            <Header data={data} />
          </header>
          <main className="site-main">
            {children()}
          </main>
          <footer className="site-footer">
            Test
          </footer>
      </div>

    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.func,
}

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
    allSitePage {
      edges {
        node {
          id
        }
      }
    }
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`

export default Layout
