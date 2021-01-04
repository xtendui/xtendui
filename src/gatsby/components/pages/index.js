import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import SEO from 'components/seo'
import Layout from 'components/layout'

export default class Page extends React.Component {
  render() {
    const { data } = this.props
    const seo = {}
    seo.title = 'Home'
    seo.description = ''
    return (
      <Layout seo={seo}>
        <SEO title={seo.title} description={seo.description} />
        <div className="gatsby_site-wrapper">
          <div className="gatsby_site-main">
            <div className="gatsby_site-main_inner">
              <header className="gatsby_home-header">
                <div className="gatsby_home-header_inner">
                  <div className="gatsby_home-header_content">
                    <div className="container">
                      <div className="gatsby_logo-icon">
                        <img src={'/logo-white.svg'} loading="eager" alt={data.site.siteMetadata.title} width="300" height="72" />
                      </div>
                      <div className="list">
                        <Link to={'/introduction/getting-started/setup'} className="btn gatsby_home-header_link">
                          Setup
                        </Link>
                        <Link to={'/components'} className="btn gatsby_home-header_link">
                          Components
                        </Link>
                        <Link to={'/themes'} className="btn gatsby_home-header_link">
                          Themes
                        </Link>
                      </div>
                    </div>
                  </div>
                  <svg className="gatsby_home-header_background">
                    <rect rx="50%" width="50" height="50"></rect>
                  </svg>
                </div>
              </header>
              <main className="gatsby_home-main">
                <div className="gatsby_home-main_head">
                  <div className="container">
                    <h1 className="h1-display mb-10">A new approach to Custom Frontend Development</h1>
                    <h2 className="h4 font-normal opacity-50">
                      Xtend UI is a UI framework for custom styling, interactions and animations. Extremely customizable and designed for building complex user
                      interfaces.
                    </h2>
                  </div>
                </div>
                <div className="gatsby_home-main_features">
                  <h3 className="h1-display mb-10">Features</h3>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </main>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        npm
        github
        twitter
        download
      }
    }
  }
`

Page.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        npm: PropTypes.string.isRequired,
        github: PropTypes.string.isRequired,
        twitter: PropTypes.string.isRequired,
        download: PropTypes.string.isRequired,
      }),
    }),
  }),
}
