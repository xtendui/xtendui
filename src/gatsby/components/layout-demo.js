import React from "react"
import PropTypes from "prop-types"

import {Xt} from "xtend-library";

class Layout extends React.Component {
  componentDidMount() {
    Xt.ready(Xt.load);
    const {demo, htmlSource, jsSource, cssSource} = this.props
    if (demo.full) {
      document.querySelector('html').classList.add('iframe-full')
    }
    if (window.self !== window.top) {
      window.addEventListener('load', function () {
        window.parent.initIframe(window.name, htmlSource, jsSource, cssSource)
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
  htmlSource: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  jsSource: PropTypes.string,
  cssSource: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Layout
