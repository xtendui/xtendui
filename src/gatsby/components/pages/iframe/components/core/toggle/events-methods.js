import React from 'react'

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

class Page extends React.Component {
  render() {
    const { location } = this.props
    return <DemoVanillaIframe location={location} />
  }
}

export default Page
