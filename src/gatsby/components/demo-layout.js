import React from "react"
import PropTypes from "prop-types"

class Layout extends React.Component {
  render() {
    const {htmlSource, jsSource, cssSource, children} = this.props
    // init iframe
    if (window.self !== window.top) {
      document.body.setAttribute('id', document.location.href.match(/[^\/]+$/)[0])
      window.parent.initIframe(window.name, htmlSource, jsSource, cssSource)
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
  jsSource: PropTypes.string,
  cssSource: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Layout
