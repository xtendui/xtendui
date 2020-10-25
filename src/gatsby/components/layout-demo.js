import React from 'react'
import PropTypes from 'prop-types'

import { Xt } from 'xtendui'

import { makeDocument } from 'assets/scripts/theme'
import ResizeSensor from 'assets/scripts/ResizeSensor'

import 'assets/styles/theme.css'

class Layout extends React.Component {
  render() {
    const { demo, children } = this.props
    if (typeof window !== 'undefined') {
      let cname = 'gatsby_iframe-inside'
      if (demo.full) {
        cname += ' gatsby_iframe-full'
      }
      if (demo.container) {
        cname += ' gatsby_iframe-container'
      }
      document.documentElement.classList.add(...cname.split(' '))
      document.documentElement.setAttribute('id', 'iframe--' + demo.name)
      const iframeLoaded = () => {
        if (window.self !== window.top) {
          window.parent.initIframe(window.name, demo.htmlSource, demo.jsxSource, demo.cssSource, demo.jsSource)
          window.parent.resizeIframe(window.frameElement.getAttribute('name'))
          if (demo.full) {
            new ResizeSensor(document.querySelector('#body-outer'), () => {
              window.parent.resizeIframe(window.frameElement.getAttribute('name'))
            })
          }
        }
        makeDocument()
      }
      Xt.ready(iframeLoaded)
    }
    return <>{children}</>
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  demo: PropTypes.shape({
    name: PropTypes.string,
    full: PropTypes.bool,
    container: PropTypes.bool,
    htmlSource: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    jsxSource: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    jsSource: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    cssSource: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  }).isRequired,
}

export default Layout
