import React from 'react'
import PropTypes from 'prop-types'

import SEO from 'components/seo'
import Layout from 'components/layout-demo'

import 'assets/styles/app.css'

export default class DemoVanillaIframe extends React.Component {
  render() {
    const { location } = this.props
    const src = location.pathname.replace('/iframe', 'demos')
    const id = src.replace('demos/', '').replace('components/', '').split('/').join('-')
    const html = require(`static/${src}.html`).default
    const css = `/${src}.css`
    const js = `/${src}.js`
    const options = require(`static/${src}.html`).options
    try {
      require(`static/${src}.css`).default
      // eslint-disable-next-line no-empty
    } catch (ex) {}
    try {
      require(`static/${src}.js`).default
      // eslint-disable-next-line no-empty
    } catch (ex) {}
    // page
    const seo = {}
    seo.title = src
    seo.description = seo.title
    document.documentElement.classList.add('gatsby_iframe-inside')
    if (options.container) {
      document.documentElement.classList.add('gatsby_iframe-container')
    }
    require('assets/scripts/shared')
    const Xt = require('xtendui').Xt
    document.documentElement.setAttribute('id', id)
    const iframeLoaded = () => {
      if (window.self !== window.top) {
        window.parent.initIframe(id, html, css, js)
      }
    }
    Xt.ready(iframeLoaded)
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

DemoVanillaIframe.propTypes = {
  location: PropTypes.object.isRequired,
}
