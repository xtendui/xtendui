import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'src/gatsby/assets/styles/app.css'

export default class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <>
        <Helmet>
          <body className="xt-body xt-links-default xl:text-lg" />
        </Helmet>
        {children}
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
