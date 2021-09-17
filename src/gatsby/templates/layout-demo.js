import React, { useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useSiteMetadata } from 'src/gatsby/templates/includes/siteMetadata'

import 'src/gatsby/assets/styles/app.css'
const classes = require('src/gatsby/templates/snippets/classes').classes

function LayoutDemo({ children }) {
  const { site } = useSiteMetadata()
  // no useEffect cause bugs demos hash
  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      require('src/gatsby/assets/scripts/setup')
    }
  }, [])
  return (
    <>
      <Helmet>
        <body
          className={`xt-body ${classes.textDefault()} xl:text-lg`}
          data-version={encodeURIComponent(site.siteMetadata.uuid)}
        />
      </Helmet>
      {children}
    </>
  )
}

LayoutDemo.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutDemo
