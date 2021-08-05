import React from 'react'
import PropTypes from 'prop-types'
import DemoIframe from 'src/gatsby/templates/demo/demo-iframe'

class Page extends React.Component {
  render() {
    const { location } = this.props
    return <DemoIframe location={location} />
  }
}

export default Page

Page.propTypes = {
  location: PropTypes.object.isRequired,
}
