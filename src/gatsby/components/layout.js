import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Footer from 'components/footer'
import DocsSidebar from 'components/doc-sidebar'
import DocsFoot from 'components/doc-foot'
import DocsAdditional from 'components/doc-additional'

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
                  <DocsSidebar site={data} seo={seo} page={page} />
                  <main className="gatsby_site_article">
                    <div className="gatsby_site_article_hero">
                      <div className="container full">
                        <h1>{seo.title}</h1>
                        {seo.description ? <p>{seo.description}</p> : null}
                      </div>
                    </div>
                    <div className="gatsby_site_article_content">
                      <div className="container full">{children}</div>
                    </div>
                    {page && page.post.frontmatter.type !== page.post.frontmatter.title ? (
                      <div className="gatsby_site_article_foot">
                        <div className="container full">
                          <DocsFoot page={page} />
                        </div>
                      </div>
                    ) : null}
                  </main>
                </div>
              </div>

              <Footer site={data} seo={seo} />
              <DocsAdditional />
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
