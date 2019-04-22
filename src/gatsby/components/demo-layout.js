import React from "react"
import PropTypes from "prop-types"

class Layout extends React.Component {
  render() {
    const {htmlSource, cssSource, jsSource, children} = this.props
    // init iframe
    if (window.self !== window.top) {
      document.body.setAttribute('id', document.location.href.match(/[^\/]+$/)[0])
      window.parent.initIframe(window.name, htmlSource, cssSource, jsSource)
    }
    return (
      <>
        {children}
      </>
    )
  }
}

Layout.propTypes = {
  htmlSource: PropTypes.string,
  cssSource: PropTypes.string,
  jsSource: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Layout
