import React, { useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useSiteMetadata } from 'src/gatsby/templates/includes/siteMetadata'
import Header from 'src/gatsby/templates/includes/header'
import Footer from 'src/gatsby/templates/includes/footer'
import DocHead from 'src/gatsby/templates/includes/doc-head'
import DocFoot from 'src/gatsby/templates/includes/doc-foot'
import DocFullscreen from 'src/gatsby/templates/includes/doc-fullscreen'

import 'src/gatsby/assets/styles/app.css'
const classes = require('src/gatsby/templates/snippets/classes').classes

export default function Layout({ children, page, seo }) {
  const { site } = useSiteMetadata()
  // no useEffect cause bugs demos hash
  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      require('src/gatsby/assets/scripts/shared')
      require('src/gatsby/assets/scripts/app')
      require('src/gatsby/assets/scripts/demo').populateBlock()
      require('src/gatsby/assets/scripts/demo').makeDocument()
    }
  }, [])
  return (
    <>
      <Helmet>
        <body
          className={`xt-body ${classes.textBlack()} xl:text-lg xt-overflow-main`}
          data-version={encodeURIComponent(site.siteMetadata.uuid)}
        />
      </Helmet>
      {seo && seo.title === 'Home' ? (
        <div className="gatsby_site-wrapper overflow-hidden flex flex-col xt-min-h-screen">
          <div className="gatsby_site-main flex flex-col flex-auto">
            <div className="gatsby_site-main_inner flex flex-col flex-auto">
              <div className="gatsby_site-article gatsby_site-article--home flex flex-col flex-auto prose max-w-none bg-white">
                <main className="flex flex-col flex-auto" id="gatsby_open-full-inner">
                  <article className="gatsby_site-article_content flex-auto">
                    <div className="gatsby_site-article_content_inner">{children}</div>
                  </article>
                  <footer className="gatsby_site-footer border-t border-gray-100">
                    <div className="gatsby_site-footer_inner container py-4 lg:py-8">
                      <Footer />
                    </div>
                  </footer>
                </main>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="gatsby_site-wrapper overflow-hidden flex flex-col xt-min-h-screen">
          <div className="gatsby_site-main flex flex-col flex-auto">
            <div className="gatsby_site-main_inner flex flex-col flex-auto">
              <Header page={page} />
              <div className="gatsby_site-article gatsby_site-article--markdown flex flex-col flex-auto prose max-w-none bg-white">
                <DocFullscreen />
                <main className="flex flex-col flex-auto" id="gatsby_open-full-inner">
                  {page && page.post ? <DocHead page={page} /> : null}
                  <article className="gatsby_site-article_content flex-auto container py-10 md:py-20">
                    <div className="gatsby_site-article_content_inner">{children}</div>
                  </article>
                  <footer className="gatsby_site-footer border-t border-gray-100">
                    <div className="gatsby_site-footer_inner container py-4 lg:py-8">
                      {page && page.post && page.post.frontmatter.type !== page.post.frontmatter.title ? (
                        <DocFoot page={page} />
                      ) : null}
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  seo: PropTypes.shape({
    title: PropTypes.string,
  }),
  page: PropTypes.shape({
    post: PropTypes.shape({
      htmlAst: PropTypes.object.isRequired,
      frontmatter: PropTypes.shape({
        type: PropTypes.string.isRequired,
        category: PropTypes.string,
        parent: PropTypes.string,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
      }),
    }),
  }),
}

/* access */

const hash = decodeURI(location.hash.split('#')[1])

if (localStorage.getItem('access') === 'clear' || hash === 'clear') {
  localStorage.setItem('access', '')
  window.access = ''
  // eslint-disable-next-line no-console
  console.debug('access cleared')
} else if (localStorage.getItem('access') === 'admin' || hash === 'admin') {
  localStorage.setItem('access', 'admin')
  window.access = 'admin'
  // eslint-disable-next-line no-console
  console.debug('access admin')
}
