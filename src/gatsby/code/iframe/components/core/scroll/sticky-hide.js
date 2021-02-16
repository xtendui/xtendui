import React from 'react'
import path from 'path'
const cardDefault = require('components/snippets/classes/card-default').default
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
<div class="demo--sticky-hide-top xt-scroll-sticky">
  <div class="demo--sticky-hide-content">
    <div class="xt-card text-sm p-6 ${cardPrimary()} demo--sticky-hide-top-main">
      <div class="xt-h4 ">Top</div>
    </div>
    <div class="xt-card text-sm p-6 ${cardDefault()} demo--sticky-hide-top-sub">
      <div class="h6">Top Second</div>
    </div>
  </div>
</div>

<div class="xt-card text-sm p-6 ${cardDefault()} demo--sticky-hide-content">
  <div class="xt-h4 ">Lorem ipsum</div>
  <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
  <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat, ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
  <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
</div>

<br><br><br><br><br><br><br>
<br><br><br><br><br><br><br>
<br><br><br><br><br><br><br>
<br><br><br><br><br><br><br>
<br><br><br><br><br><br><br>
<br><br><br><br><br><br><br>
<br><br><br><br><br><br><br>
<br><br><br><br><br><br><br>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
