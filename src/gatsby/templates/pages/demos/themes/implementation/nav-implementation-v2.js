import React from 'react'
import PropTypes from 'prop-types'
import DemoIframe from 'src/gatsby/templates/demo/demo-iframe'

function Page(props) {
  const { location } = props
  return <DemoIframe location={location} />
}

Page.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Page
