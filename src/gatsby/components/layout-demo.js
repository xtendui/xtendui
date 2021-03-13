import React from 'react'
import PropTypes from 'prop-types'

export default class Layout extends React.Component {
  render() {
    const { children } = this.props
    return <>{children}</>
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
