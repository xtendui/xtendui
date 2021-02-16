import React from 'react'
import path from 'path'
const markupFade = require('components/snippets/components/markup-fade').default
const indentString = require('indent-string')

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: true,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-row xt-row-6 demo--fade-inside">
${indentString(markupFade(), 2)}
</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
