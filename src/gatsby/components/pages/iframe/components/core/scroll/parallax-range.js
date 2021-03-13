import React from 'react'
import path from 'path'

import DemoIframe from 'components/demo/demo-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
const demo = {
  container: true,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="demo--parallax-range">

  <div class="box box-0 bg-primary-500 w-24 h-24 my-96"></div>

</div>
`

class Page extends React.Component {
  render() {
    return <DemoIframe demo={demo} />
  }
}

export default Page
