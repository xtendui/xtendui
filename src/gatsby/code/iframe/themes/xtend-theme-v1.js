import React from 'react'
import path from 'path'
const markupButton = require('components/snippets/themes/markup-button').default
const markupDrop = require('components/snippets/themes/markup-drop').default
const markupOverlay = require('components/snippets/themes/markup-overlay').default
const markupCard = require('components/snippets/themes/markup-card').default

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: true,
  full: false,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="h5 h-block">
  Button
</div>
${markupButton()}
<div class="h5 h-block">
  Drop
</div>
${markupDrop()}
<div class="h5 h-block">
  Overlay
</div>
${markupOverlay()}
<div class="h5 h-block">
  Card
</div>
${markupCard()}
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
