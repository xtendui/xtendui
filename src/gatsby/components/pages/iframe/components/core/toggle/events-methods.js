import React from 'react'

import DemoIframe from 'components/demo/demo-iframe'

class Page extends React.Component {
  render() {
    const { location } = this.props
    return <DemoIframe location={location} />
  }
}

export default Page
