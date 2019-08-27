import React from 'react'
import path from 'path'

import DemoVanillaIframe from 'components/demo-vanilla-iframe'

const dirs = path.dirname(__filename).split('/');
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
  full: false,
}

demo.htmlSource = `
<button type="button" class="group">
  <span class="group_inner">
    <span class="btn btn--primary">
      <span>btn 1</span>
    </span>
  </span>
  <span class="group_inner">
    <span class="btn btn--secondary">
      <span>btn 2</span>
    </span>
  </span>
  <span class="group_inner">
    <span class="btn btn--primary">
      <span>btn 3</span>
    </span>
  </span>
  <span class="group_inner">
    <span class="btn btn--secondary">
      <span>btn 4</span>
    </span>
  </span>
</button>
`

class Page extends React.Component {
  render() {
    return (
      <DemoVanillaIframe demo={demo}/>
    )
  }
}

export default Page
