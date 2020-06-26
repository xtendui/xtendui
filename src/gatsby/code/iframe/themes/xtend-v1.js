import React from 'react'
import path from 'path'
const markupButton = require('components/snippets/markup-button').default
const markupDrop = require('components/snippets/markup-drop').default
const markupOverlay = require('components/snippets/markup-overlay').default
const markupCard = require('components/snippets/markup-card').default

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: true,
  full: false,
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="h5 header-block">
  Button
</div>
${markupButton()}
<div class="h5 header-block">
  Drop
</div>
${markupDrop()}
<div class="h5 header-block">
  Overlay
</div>
${markupOverlay()}
<div class="h5 header-block">
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
