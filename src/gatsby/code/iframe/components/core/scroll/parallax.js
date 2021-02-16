import React from 'react'
import path from 'path'

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: true,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="demo--parallax">

  <h1 class="h-screen">Scroll down</h1>

  <div class="box box-0 bg-primary-500 w-24 h-24 mb-96"></div>

  <div class="box box-1 bg-primary-500 w-24 h-24 my-96"></div>

  <div class="box box-2 bg-primary-500 w-24 h-24 mt-96"></div>

  <h1 class="h-screen">Scroll up</h1>

</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
