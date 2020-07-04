import React from 'react'
import path from 'path'
const markupDrop = require('components/snippets/themes/markup-drop').default
const markupOverlay = require('components/snippets/themes/markup-overlay').default
const markupGroup = require('components/snippets/themes/markup-group').default

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
<div class="h5 header-block">
  Drop
</div>
${markupDrop()}
<div class="h5 header-block">
  Overlay
</div>
${markupOverlay()}
<div class="h5 header-block">
  Group
</div>
${markupGroup()}
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
