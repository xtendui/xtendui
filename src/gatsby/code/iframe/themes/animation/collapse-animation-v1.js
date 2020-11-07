import React from 'react'
import path from 'path'

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
<div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">
  Drop
</div>
<div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">
  Overlay
</div>
<div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">
  Group
</div>

<div class="list list-2 items-center">

  <form class="form-default flex-full" data-xt-toggle="{ elements: '.form-group > .btn', targets: '.group' }">
    <div class="form-group">
      <button type="button" class="btn btn-primary">
        group
      </button>
      <div class="list group-default">
        <div class="list-inner">
          <button type="button" class="btn btn-default btn-lg">
            ipsum
          </button>
        </div>
        <div class="list-inner">
          <input type="text" class="form-item" />
        </div>
      </div>
    </button>
  </form>

</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
