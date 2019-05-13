import React from "react"
import PropTypes from "prop-types"

import {Xt} from "xtend-library";

class Layout extends React.Component {
  componentDidMount() {
    Xt.ready(Xt.load);
    const {demo} = this.props
    if (demo.full) {
      document.querySelector('html').classList.add('iframe-full')
    }
    if (window.self !== window.top) {
      window.addEventListener('load', function () {
        window.parent.initIframe(window.name, demo.htmlSource, demo.jsSource, demo.cssSource)
        window.parent.resizeIframe(window.name)
        window.addEventListener('resize', function () {
          window.parent.resizeIframe(window.name)
        })
      })
    }
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
    jsSource: PropTypes.string.isRequired,
    cssSource: PropTypes.string.isRequired,
  }).isRequired,
}

export default Layout
