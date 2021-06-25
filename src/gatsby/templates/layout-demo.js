import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useSiteMetadata } from 'src/gatsby/templates/includes/siteMetadata'

import 'src/gatsby/assets/styles/app.css'

export default function Layout({ children }) {
  const { site } = useSiteMetadata()
  return (
    <>
      <Helmet>
        <body
          className="xt-body xt-links-default xl:text-lg"
          data-version={encodeURIComponent(site.siteMetadata.uuid)}
        />
      </Helmet>
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
