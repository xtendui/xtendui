import React from 'react'
import path from 'path'

import DemoReactIframe from 'components/demo-react-iframe'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  container: true,
  full: false,
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

class Page extends React.Component {
  render() {
    return <DemoReactIframe demo={demo} vanilla="vanilla-iframe" />
  }
}

export default Page
