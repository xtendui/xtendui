import React from "react"
import PropTypes from "prop-types"

class Layout extends React.Component {
  render() {
    const {htmlSource, jsSource, cssSource, children} = this.props
    if (typeof window !== 'undefined') {
      if (window.self !== window.top) {
        window.parent.initIframe(window.name, htmlSource, jsSource, cssSource)
      }
    }
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
