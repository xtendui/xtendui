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
    demo.jsSource = demo.js ? require('!!raw-loader!./' + demo.name + '.source.js').default : null
    demo.Component = require('./' + demo.name + '.source.js').default
    return (
      <DemoReactIframe demo={demo}/>
    )
  }
}

export default Page
