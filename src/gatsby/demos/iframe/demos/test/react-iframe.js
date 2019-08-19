import React from 'react'
import path from 'path'

import DemoReactIframe from 'components/demo-react-iframe'

const dirs = path.dirname(__filename).split('/');
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
  css: true,
  js: true,
  full: true,
}

class Page extends React.Component {
  render() {
    return (
      <DemoReactIframe demo={demo}/>
    )
  }
}

export default Page
