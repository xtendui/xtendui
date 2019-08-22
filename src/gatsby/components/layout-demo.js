import React from 'react'
import PropTypes from 'prop-types'

import {Xt} from 'xtend-library'
import {Controller} from 'xtend-library/src/core/controller/controller'
import {Toggle} from 'xtend-library/src/core/toggle/toggle'
import {Drop} from 'xtend-library/src/core/drop/drop'
import {Overlay} from 'xtend-library/src/core/overlay/overlay'
import {Smooth} from 'xtend-library/src/core/smooth/smooth'
import {Slider} from 'xtend-library/src/core/slider/slider'
import {Scroll} from 'xtend-library/src/core/scroll/scroll'
import {Sticky} from 'xtend-library/src/core/sticky/sticky'
import {Ajax} from 'xtend-library/src/core/ajax/ajax'
import 'xtend-library/src/xtend-demos'
import 'xtend-library/src/xtend-extensions'
import {makeDocument} from 'assets/scripts/theme.js'
import ResizeSensor from 'assets/scripts/ResizeSensor.js'

import 'assets/styles/theme.less';

class Layout extends React.Component {
  componentDidMount() {
    const {demo} = this.props
    if (demo.full) {
      document.querySelector('html').classList.add('iframe-full')
    }
    let iframeLoaded = function () {
      if (window.self !== window.top) {
        window.parent.initIframe(window.name, demo.htmlSource, demo.jsSource, demo.cssSource)
        new ResizeSensor(document.querySelector('#body-outer'), function () {
          window.parent.resizeIframe(window.frameElement.getAttribute('name'))
        })
      }
      makeDocument()
    }
    Xt.ready(iframeLoaded)
  }

  render() {
    const {children} = this.props
    return (
      <>
        {children}
      </>
    )
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
