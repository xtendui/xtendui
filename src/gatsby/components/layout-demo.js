import React from 'react'
import PropTypes from 'prop-types'

import 'assets/styles/app.css'

export default class Layout extends React.Component {
  render() {
    const { demo, children } = this.props
    if (typeof window !== 'undefined') {
      require('assets/scripts/shared')
      const Xt = require('xtendui').Xt
      let cname = 'gatsby_iframe-inside'
      if (demo.container) {
        cname += ' gatsby_iframe-container'
      }
      document.documentElement.classList.add(...cname.split(' '))
      document.documentElement.setAttribute('id', `iframe--${demo.name}`)
      const iframeLoaded = () => {
        if (window.self !== window.top) {
          window.parent.initIframe(window.name, demo.htmlSource, demo.jsxSource, demo.cssSource, demo.jsSource)
        }
      }
      Xt.ready(iframeLoaded)
    }
    return <>{children}</>
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  demo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    container: PropTypes.bool,
    htmlSource: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    jsxSource: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    jsSource: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    cssSource: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  }),
}
