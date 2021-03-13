import React from 'react'

import DemoIframe from 'components/demo/demo-iframe'

class Page extends React.Component {
  render() {
    const { location } = this.props
    const src = location.pathname
    const id = src.replace('demos/', '').replace('components/', '').split('/').join('-')
    return <DemoIframe location={location} />
  }
}

export default Page
