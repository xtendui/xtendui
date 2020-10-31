import React from 'react'
import PropTypes from 'prop-types'

import Header from 'components/includes/header'
import Footer from 'components/includes/footer'
import DocHead from 'components/includes/doc-head'
import DocFoot from 'components/includes/doc-foot'
import DocFullscreen from 'components/includes/doc-fullscreen'

import { makeDocument } from 'assets/scripts/theme'
import { populateBlock } from 'assets/scripts/demo'

import 'assets/styles/theme.css'

if (typeof window !== 'undefined' && window.self === window.top) {
  if (module.hot) {
    module.hot.addStatusHandler(status => {
      if (status === 'apply') {
        window.location.reload()
      }
    })
  }
}

export default class Layout extends React.Component {
  componentDidMount() {
    populateBlock()
    makeDocument()
  }
  render() {
    const { page, children } = this.props
    return (
      <>
        {!page ? (
          <div className="gatsby_site_wrapper">
            <div className="gatsby_site_main">
              <div className="gatsby_site_main_inner">
                <div className="gatsby_site_article gatsby_site_article--home prose max-w-none">
                  <main className="gatsby_site_article_inner" id="gatsby_open-full-inner">
                    <article className="gatsby_site_article_content">
                      <div className="gatsby_site_article_content_inner">{children}</div>
                    </article>
                    <footer className="gatsby_site_footer">
                      <div className="gatsby_site_footer_inner">
                        <Footer />
                      </div>
                    </footer>
                  </main>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="gatsby_site_wrapper">
            <div className="gatsby_site_main">
              <div className="gatsby_site_main_inner">
                <Header page={page} />
                <div className="gatsby_site_article gatsby_site_article--markdown prose max-w-none">
                  <DocFullscreen />
                  <main className="gatsby_site_article_inner" id="gatsby_open-full-inner">
                    {page ? <DocHead page={page} /> : null}
                    <article className="gatsby_site_article_content">
                      <div className="gatsby_site_article_content_inner">{children}</div>
                    </article>
                    <footer className="gatsby_site_footer">
                      <div className="gatsby_site_footer_inner">
                        {page && page.post.frontmatter.type !== page.post.frontmatter.title ? <DocFoot page={page} /> : null}
                        <Footer />
                      </div>
                    </footer>
                  </main>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  page: PropTypes.shape({
    post: PropTypes.shape({
      htmlAst: PropTypes.object.isRequired,
      frontmatter: PropTypes.shape({
        type: PropTypes.string.isRequired,
        category: PropTypes.string,
        parent: PropTypes.string,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
      }).isRequired,
    }).isRequired,
  }),
}
