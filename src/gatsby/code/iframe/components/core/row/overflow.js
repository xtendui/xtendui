import React from 'react'
import path from 'path'
const cardDefault = require('components/snippets/classes/card-default').default

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: true,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-row xt-row-4 xt-row-overflow demo--row-overflow">

  <div class="w-full md:w-4/12">
    <div class="xt-card rounded-md ${cardDefault()}">
      <div class="text-base p-8">
        <div class="xt-h4 ">Lorem ipsum dolor sit amet</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh.</p>
      </div>
    </div>
  </div>

  <div class="w-full md:w-4/12">
    <div class="xt-card rounded-md ${cardDefault()}">
      <div class="text-base p-8">
        <div class="xt-h4 ">Lorem ipsum dolor sit amet</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>

  <div class="w-full md:w-4/12">
    <div class="xt-card rounded-md ${cardDefault()}">
      <div class="text-base p-8">
        <div class="xt-h4 ">Lorem ipsum dolor sit amet</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>

</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
