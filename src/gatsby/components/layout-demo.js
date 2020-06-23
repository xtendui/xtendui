import React from 'react'
import PropTypes from 'prop-types'

import 'core-js'
import 'regenerator-runtime/runtime'
import 'xtend-library/src/polyfill.js'
import { Xt } from 'xtend-library/src/xt.js'
import 'xtend-library/src/xtend-core.js'
import 'xtend-library/src/xtend-extensions.js'
import 'xtend-library/src/xtend-addons.js'
import 'xtend-library/src/xtend-demos.js'

import { makeDocument } from 'assets/scripts/theme.js'
import ResizeSensor from 'assets/scripts/ResizeSensor.js'

import 'assets/styles/theme.less'

if (typeof window !== 'undefined' && window.self === window.top) {
  if (module.hot) {
    module.hot.addStatusHandler(status => {
      if (status === 'apply') {
        window.location.reload()
      }
    })
  }
}

class Layout extends React.Component {
  componentDidMount() {
    const { demo } = this.props
    document.querySelector('html').classList.add('gatsby_iframe-inside')
    document.querySelector('html').setAttribute('id', 'iframe--' + demo.name)
    if (demo.full) {
      document.querySelector('html').classList.add('gatsby_iframe-full')
    }
    if (demo.container) {
      document.querySelector('html').classList.add('gatsby_iframe-container')
    }
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

  render() {
    const { children } = this.props
    return <>{children}</>
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  demo: PropTypes.shape({
    htmlSource: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    jsSource: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    cssSource: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  }).isRequired,
}

export default Layout
