import React from 'react'
import path from 'path'
const img = require('components/snippets/img').default

import DemoVanillaIframe from 'components/demo-vanilla-iframe'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  full: false,
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<div class="list list--default">
  <div class="demo--parallax-title">
    <h1>Parallax Title</h1>
  </div>
  <div class="demo--parallax-img">
     ${img(1000, 150, 'full')}
  </div>
</div>

<br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/>

<div class="demo--parallax-footer">
  <h4>Parallax Footer</h4>
</div>
`

class Page extends React.Component {
  render () {
    return (
      <DemoVanillaIframe demo={demo}/>
    )
  }
}

export default Page
