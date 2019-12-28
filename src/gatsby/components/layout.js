import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Footer from 'components/includes/footer'
import DocSidebar from 'components/includes/doc-sidebar'
import DocHead from 'components/includes/doc-head'
import DocFoot from 'components/includes/doc-foot'
import DocFullscreen from 'components/includes/doc-fullscreen'

import 'xtend-library/src/polyfill.js'
import 'xtend-library/src/polyfill-old.js'
import { Xt } from 'xtend-library'
import 'xtend-library/src/xtend-core.js'
import 'xtend-library/src/xtend-extensions.js'
import 'xtend-library/src/xtend-addons.js'
import 'xtend-library/src/xtend-demos.js'
import 'xtend-library/src/xtend-themes.js'

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
                    <main className="gatsby_site_article_inner" id="toggle_open-full-inner">
                      {page ? <DocHead page={page} /> : null}
                      <article className="gatsby_site_article_content">
                        <div className="gatsby_site_article_content_inner">{children}</div>
                      </article>
                      {page && page.post.frontmatter.type !== page.post.frontmatter.title ? <DocFoot page={page} /> : null}
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
