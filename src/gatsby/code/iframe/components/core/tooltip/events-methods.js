import React from 'react'
import path from 'path'
const buttonPrimary = require('components/snippets/classes/button-primary').default
const cardBlack = require('components/snippets/classes/card-black').default
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
<div class="xt-list xt-list-3 items-center mb-4">
  <button type="button" class="xt-button text-3xs py-1.5 px-2.5 rounded-md ${buttonPrimary()}" id="demo--tooltip-events-first-element">
    1st element
  </button>
  <button type="button" class="xt-button text-3xs py-1.5 px-2.5 rounded-md ${buttonPrimary()}" id="demo--tooltip-events-first-target">
    1st target
  </button>
  <button type="button" class="xt-button text-3xs py-1.5 px-2.5 rounded-md ${buttonPrimary()}" id="demo--tooltip-events-add">
    Add
  </button>
  <button type="button" class="xt-button text-3xs py-1.5 px-2.5 rounded-md ${buttonPrimary()}" id="demo--tooltip-events-remove">
    Remove
  </button>
  <button type="button" class="xt-button text-3xs py-1.5 px-2.5 rounded-md ${buttonPrimary()}" id="demo--tooltip-events-block">
    Block/Unblock
  </button>
  <button type="button" class="xt-button text-3xs py-1.5 px-2.5 rounded-md ${buttonPrimary()}" id="demo--tooltip-events-reinit">
    Reinit
  </button>
  <button type="button" class="xt-button text-3xs py-1.5 px-2.5 rounded-md ${buttonPrimary()}" id="demo--tooltip-events-restart">
    Restart
  </button>
  <button type="button" class="xt-button text-3xs py-1.5 px-2.5 rounded-md ${buttonPrimary()}" id="demo--tooltip-events-destroy">
    Destroy
  </button>
  <button type="button" class="xt-button text-3xs py-1.5 px-2.5 rounded-md ${buttonPrimary()}" id="demo--tooltip-events-unmount">
    Unmount
  </button>
</div>

<div class="xt-list xt-list-3 items-center" id="demo--tooltip-events" title="Object">

  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
    Element 0
  </button>

  <div class="xt-tooltip p-2" title="Target 0">
    <div class="text-xs py-2 px-3.5 rounded shadow-tooltip ${cardBlack()}">
      Lorem ipsum dolor sit amet
    </div>
  </div>

  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
    Element 1
  </button>

  <div class="xt-tooltip p-2" title="Target 1">
    <div class="text-xs py-2 px-3.5 rounded shadow-tooltip ${cardBlack()}">
      Lorem ipsum dolor sit amet
    </div>
  </div>

</div>

<div class="xt-card rounded-md ${cardDefault()} mt-6">
  <div class="text-sm p-6 overflow-y-auto overflow-x-hidden xt-overflow-sub max-h-56" id="demo--tooltip-events-log">
  </div>
</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
