import React from 'react'
import path from 'path'

import DemoReactIframe from 'components/demo/demo-react-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: true,
  full: true,
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

class Page extends React.Component {
  render() {
    return <DemoReactIframe demo={demo} />
  }
}

export default Page
