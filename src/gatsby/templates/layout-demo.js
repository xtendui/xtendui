import React, { useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useSiteMetadata } from 'src/gatsby/templates/includes/siteMetadata'

import { Xt } from 'xtendui'
import 'src/gatsby/assets/styles/app.css'
const classes = require('src/gatsby/templates/snippets/classes').classes

export default function LayoutDemo({ children }) {
  const { site } = useSiteMetadata()
  // no useEffect cause bugs demos hash
  useLayoutEffect(() => {
    // fix iframe css being loaded after js executed (e.g. slider wrap wrong initial values)
    Xt.ready({
      func: () => {
        dispatchEvent(
          new CustomEvent('resize', {
            detail: {
              force: true,
            },
          })
        )
      },
    })
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
