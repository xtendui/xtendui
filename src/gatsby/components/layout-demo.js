import React from 'react'
import PropTypes from 'prop-types'

import { Xt } from 'xtendui'

import { makeDocument } from 'assets/scripts/theme'
import ResizeSensor from 'assets/scripts/ResizeSensor'

import 'assets/styles/theme.css'

export default class Layout extends React.Component {
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
      document.documentElement.setAttribute('id', `iframe--${demo.name}`)
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
    name: PropTypes.string.isRequired,
    full: PropTypes.bool.isRequired,
    container: PropTypes.bool.isRequired,
    htmlSource: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
    jsxSource: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
    jsSource: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
    cssSource: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  }),
}
