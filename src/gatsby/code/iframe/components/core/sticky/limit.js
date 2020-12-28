import React from 'react'
import path from 'path'
const cardPrimary = require('components/snippets/classes/card-primary').default

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: false,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<br><br><br><br><br><br><br>
<br><br><br><br><br><br><br>

<div class="demo--sticky-limit-top scroll-sticky">
  <div class="card card-sm ${cardPrimary()}">
    <div class="h4">Top</div>
  </div>
</div>

<br><br><br><br><br><br><br>
<br><br><br><br><br><br><br>

<div class="demo--sticky-limit-topafter scroll-sticky">
  <div class="card card-sm ${cardPrimary()}">
    <div class="h4">Top After</div>
  </div>
</div>

<br><br><br><br><br><br><br>
<br><br><br><br><br><br><br>

<div class="demo--sticky-limit-bottom scroll-sticky">
  <div class="card card-sm ${cardPrimary()}">
    <div class="h4">Bottom</div>
  </div>
</div>

<br><br><br><br><br><br><br>
<br><br><br><br><br><br><br>

<div class="demo--sticky-limit-bottomafter scroll-sticky">
  <div class="card card-sm ${cardPrimary()}">
    <div class="h4">Bottom After</div>
  </div>
</div>

<br><br><br><br><br><br><br>
<br><br><br><br><br><br><br>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
