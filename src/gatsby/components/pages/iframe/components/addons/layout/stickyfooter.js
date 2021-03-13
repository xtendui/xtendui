import React from 'react'
import path from 'path'

const classes = require('components/snippets/classes').classes

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
const demo = {
  container: false,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="site-wrapper">

  <header class="site-header">
    <div class="xt-card ${classes.cardSm()} ${classes.cardPrimary()}">
      <div class="xt-h4">Header</div>
    </div>
  </header>

  <main class="site-main">
    <div class="xt-card ${classes.cardSm()} ${classes.cardDefault()}">
      <div class="xt-h4">Main</div>
      <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
    </div>
  </main>

  <footer class="site-footer">
    <div class="xt-card ${classes.cardSm()} ${classes.cardPrimary()}">
      <div class="xt-h4">Footer</div>
    </div>
  </footer>

</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
