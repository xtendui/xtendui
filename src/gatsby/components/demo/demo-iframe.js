import React from 'react'
import PropTypes from 'prop-types'

import SEO from 'components/seo'
import Layout from 'components/layout-demo'

import 'assets/styles/app.css'

export default class DemoIframe extends React.Component {
  render() {
    const { location } = this.props
    const src = location.pathname.substring(1)
    const id = src.replace('demos/', '').replace('components/', '').split('/').join('-')
    // iframe
    const options = require(`static/${src}.html`).options
    const seo = {}
    seo.title = src
    seo.description = seo.title
    document.documentElement.classList.add('gatsby_iframe-inside')
    if (options.container) {
      document.documentElement.classList.add('gatsby_iframe-container')
    }
    require('assets/scripts/shared')
    document.documentElement.setAttribute('id', id)
    // css
    try {
      require(`static/${src}.css`).default
      // eslint-disable-next-line no-empty
    } catch (ex) {}
    // switch
    const mode = localStorage.getItem('mode')
    if (mode === 'react') {
      // react
      const Demo = require(`static/${src}.jsx`).default
      const Xt = require('xtendui').Xt
      const iframeLoaded = () => {
        if (window.self !== window.top) {
          window.parent.initIframe(id, false, `/${src}.jsx`, `/${src}.css`)
        }
      }
      Xt.ready(iframeLoaded)
      // render
      return (
        <Layout>
          <SEO title={seo.title} description={seo.description} />
          <div id="body-outer">
            <div
              id="gatsby_body-inner"
              className="gatsby_demo_source--from"
            >
              <Demo />
            </div>
          </div>
        </Layout>
      )
    } else {
      // vanilla
      const html = require(`static/${src}.html`).default
      const Xt = require('xtendui').Xt
      const iframeLoaded = () => {
        if (window.self !== window.top) {
          window.parent.initIframe(id, html, `/${src}.css`, `/${src}.js`)
        }
      }
      Xt.ready(iframeLoaded)
      try {
        require(`static/${src}.js`).default
        // eslint-disable-next-line no-empty
      } catch (ex) {}
      // render
      return (
        <Layout>
          <SEO title={seo.title} description={seo.description} />
          <div id="body-outer">
            <div
              id="gatsby_body-inner"
              className="gatsby_demo_source--from"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </Layout>
      )
    }
  }
}

DemoIframe.propTypes = {
  location: PropTypes.object.isRequired,
}
