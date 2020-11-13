import React from 'react'
import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardDefaultTooltip = require('components/snippets/classes/card-default-tooltip').default
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
<div class="list list-1 items-center mb-4">
  <button type="button" class="btn btn-sm rounded-md ${btnPrimary()}" id="demo--tooltip-events-first-element">
    1st element
  </button>
  <button type="button" class="btn btn-sm rounded-md ${btnPrimary()}" id="demo--tooltip-events-first-target">
    1st target
  </button>
  <button type="button" class="btn btn-sm rounded-md ${btnPrimary()}" id="demo--tooltip-events-add">
    Add
  </button>
  <button type="button" class="btn btn-sm rounded-md ${btnPrimary()}" id="demo--tooltip-events-remove">
    Remove
  </button>
  <button type="button" class="btn btn-sm rounded-md ${btnPrimary()}" id="demo--tooltip-events-block">
    Block/Unblock
  </button>
  <button type="button" class="btn btn-sm rounded-md ${btnPrimary()}" id="demo--tooltip-events-reinit">
    Reinit
  </button>
  <button type="button" class="btn btn-sm rounded-md ${btnPrimary()}" id="demo--tooltip-events-restart">
    Restart
  </button>
  <button type="button" class="btn btn-sm rounded-md ${btnPrimary()}" id="demo--tooltip-events-destroy">
    Destroy
  </button>
  <button type="button" class="btn btn-sm rounded-md ${btnPrimary()}" id="demo--tooltip-events-unmount">
    Unmount
  </button>
</div>

<div class="list list-2 items-center" id="demo--tooltip-events" title="Object">

  <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
    Element 0
  </button>

  <div class="tooltip" title="Target 0">
    <div class="tooltip-md rounded shadow-tooltip ${cardDefaultTooltip()}">
      Lorem ipsum dolor sit amet
    </div>
  </div>

  <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
    Element 1
  </button>

  <div class="tooltip" title="Target 1">
    <div class="tooltip-md rounded shadow-tooltip ${cardDefaultTooltip()}">
      Lorem ipsum dolor sit amet
    </div>
  </div>

</div>

<div class="card rounded-md ${cardDefault()} mt-6">
  <div class="card-sm overflow-y-auto overflow-x-hidden overflow-sub max-h-56" id="demo--tooltip-events-log">
  </div>
</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
