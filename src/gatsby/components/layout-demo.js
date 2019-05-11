import React from "react"
import PropTypes from "prop-types"

class Layout extends React.Component {
  componentDidMount() {
    const {htmlSource, jsSource, cssSource} = this.props
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
