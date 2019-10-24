import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from 'components/header'
import Footer from 'components/footer'
import DocsSidebar from 'components/doc-sidebar'
import DocsAside from 'components/doc-aside'
import DocsFoot from 'components/doc-foot'

import 'xtend-library/src/polyfill.js'
import 'xtend-library/src/polyfill-old.js'
import { Xt } from 'xtend-library'
import 'xtend-library/src/xtend-core.js'
import 'xtend-library/src/xtend-extension.js'
import 'xtend-library/src/xtend-demo.js'

import { populateBlock } from 'assets/scripts/demo.js'
import { makeDocument } from 'assets/scripts/theme.js'

import 'assets/styles/theme.less'

class Layout extends React.Component {
  componentDidMount () {
    populateBlock()
    makeDocument()
  }

  render () {
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
            <div className={`gatsby_site_wrapper
              ${page ? ' gatsby_site_wrapper--with-sidebar gatsby_site_wrapper--with-aside' : ''}`}>

              <Header site={data} seo={seo} page={page}/>

              <main className="gatsby_site_main">
                <div className="gatsby_site_main_inner">

                  {page
                    ? <div className="gatsby_site--with-sidebar gatsby_site--with-aside">
                      <DocsSidebar page={page}/>
                      <article className="gatsby_site_article">
                        <div className="gatsby_site_article_hero">
                          <div className="container full">
                            <h1>{seo.title}</h1>
                            {seo.description ? <p>{seo.description}</p> : null}
                          </div>
                        </div>
                        <div className="gatsby_site_article_content">
                          <div className="container full">
                            {children}
                          </div>
                        </div>
                        {page.post.frontmatter.type !== page.post.frontmatter.title
                          ? <div className="gatsby_site_article_foot">
                            <div className="container full">
                              <DocsFoot page={page}/>
                            </div>
                          </div>
                          : null
                        }
                      </article>
                      <DocsAside page={page}/>
                    </div>
                    : <article className="gatsby_site_article">
                      <div className="gatsby_site_article_content">
                        <div className="container full">
                          {children}
                        </div>
                      </div>
                    </article>
                  }

                </div>
              </main>

              <Footer site={data} seo={seo}/>

            </div>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
