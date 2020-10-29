import React from 'react'
import path from 'path'
const markupMegamenus = require('components/snippets/themes/markup-megamenus').default

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: false,
  full: false,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
${markupMegamenus()}
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
