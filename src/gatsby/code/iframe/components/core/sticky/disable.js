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
<br><br><br><br><br><br><br>

<div class="sticky-0 demo--sticky-disable" data-xt-sticky="{ limit: { top: 0, bottom: '.sticky-1.xt-clone' } }"> <!-- if limit to sticky use .xt-clone -->
  <div class="card card-sm ${cardPrimary()}">
    <div class="h4">Sticky</div>
  </div>
</div>

<div class="card card-sm ${cardDefault()}">
  <div class="h4">Lorem ipsum</div>
  <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
</div>

<div class="sticky-1 demo--sticky-disable" data-xt-sticky="{ position: 'bottom', limit: { bottom: 50 } }">
  <div class="card card-sm ${cardPrimary()}">
    <div class="h4">Sticky</div>
  </div>
</div>

<div class="card card-sm ${cardDefault()}">
  <div class="h4">Lorem ipsum</div>
  <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
</div>

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
