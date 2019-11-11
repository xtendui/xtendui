import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Footer from 'components/footer'
import DocSidebar from 'components/doc-sidebar'
import DocFoot from 'components/doc-foot'
import DocFullscreen from 'components/doc-fullscreen'

import 'xtend-library/src/polyfill.js'
import 'xtend-library/src/polyfill-old.js'
import { Xt } from 'xtend-library'
import 'xtend-library/src/xtend-core.js'
import 'xtend-library/src/xtend-addons.js'
import 'xtend-library/src/xtend-extensions.js'
import 'xtend-library/src/xtend-demos.js'

import { populateBlock } from 'assets/scripts/demo.js'
import { makeDocument } from 'assets/scripts/theme.js'

import 'assets/styles/theme.less'

class Layout extends React.Component {
  componentDidMount() {
    populateBlock()
    makeDocument()
  }

  render() {
    const { seo, page, children } = this.props
    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
                author
                version
                npm
                github
                download
              }
            }
          }
        `}
        render={data => (
          <>
            <div className="gatsby_site_wrapper">
              <div className="gatsby_site_main">
                <div className="gatsby_site_main_inner">
                  <DocSidebar site={data} seo={seo} page={page} />
                  <div className="gatsby_site_article">
                    <DocFullscreen />
                    <main className="gatsby_site_article_inner" id="toggle--open-full-inner">
                      <header className="gatsby_site_article_hero">
                        <div className="container full">
                          <h1>{seo.title}</h1>
                          {seo.description ? <p>{seo.description}</p> : null}
                        </div>
                      </header>
                      <article className="gatsby_site_article_content">
                        <div className="container full">{children}</div>
                      </article>
                      {page && page.post.frontmatter.type !== page.post.frontmatter.title ? (
                        <footer className="gatsby_site_article_foot">
                          <div className="container full">
                            <DocFoot page={page} />
                          </div>
                        </footer>
                      ) : null}
                      <Footer site={data} seo={seo} />
                    </main>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
