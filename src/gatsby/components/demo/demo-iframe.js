import React from 'react'
import PropTypes from 'prop-types'

import SEO from 'src/gatsby/components/seo'
import Layout from 'src/gatsby/components/layout-demo'

export default class DemoIframe extends React.Component {
  render() {
    const { location } = this.props
    const src = location.pathname.replace(/^\/|\/$/g, '') // replace leading and trailing slash if present
    const id = src.split('/').join('-')
    const mode = typeof window !== 'undefined' ? localStorage.getItem('mode') : null
    console.log(localStorage.getItem('mode'))
    // seo
    const seo = {}
    seo.title = src
    seo.description = seo.title
    // iframe
    if (typeof window !== 'undefined') {
      document.documentElement.classList.add('gatsby_iframe-inside')
      const object = require(`static/${src}.html.js`).object
      if (object.container) {
        document.documentElement.classList.add('gatsby_iframe-container')
      }
      require('src/gatsby/assets/scripts/shared')
      document.documentElement.setAttribute('id', id)
    }
    // css
    try {
      require(`static/${src}.css`).default
      // eslint-disable-next-line no-empty
    } catch (ex) {}
    // vanilla
    const html = require(`static/${src}.html.js`).object.html
    try {
      require(`static/${src}.js`).default
      // eslint-disable-next-line no-empty
    } catch (ex) {}
    // react
    const Demo = require(`static/${src}.jsx`).default
    // code
    if (typeof window !== 'undefined') {
      if (window.self !== window.top) {
        const Xt = require('xtendui').Xt
        let iframeLoaded
        if (mode === 'react') {
          iframeLoaded = () => {
            window.parent.initIframe(src, false, `/${src}.jsx`, `/${src}.css`)
          }
        } else {
          iframeLoaded = () => {
            window.parent.initIframe(src, html, false, `/${src}.css`, `/${src}.js`)
          }
        }
        Xt.ready(iframeLoaded)
      }
    }
    // render with all
    return (
      <Layout>
        <SEO title={seo.title} description={seo.description} />
        <div id="body-outer">
          {mode === 'react' ? (
            <div id="gatsby_body-inner" className="gatsby_demo_source--from">
              <Demo />
            </div>
          ) : (
            <div
              id="gatsby_body-inner"
              className="gatsby_demo_source--from"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          )}
        </div>
      </Layout>
    )
  }
}

DemoIframe.propTypes = {
  location: PropTypes.object.isRequired,
}
