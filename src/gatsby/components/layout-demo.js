import React from 'react'
import PropTypes from 'prop-types'

import 'src/gatsby/assets/styles/app.css'

export default class Layout extends React.Component {
  render() {
    const { children } = this.props
    return <>{children}</>
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
