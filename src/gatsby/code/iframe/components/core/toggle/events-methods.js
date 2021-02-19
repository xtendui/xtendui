import React from 'react'
import path from 'path'
const buttonDefault = require('components/snippets/classes/button-default').default
const buttonPrimary = require('components/snippets/classes/button-primary').default
const cardDefault = require('components/snippets/classes/card-default').default
const cardToggle = require('components/snippets/classes/card-toggle').default

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
  <button type="button" class="xt-button text-3xs py-1.5 px-2.5 rounded-md ${buttonPrimary()}" id="demo--toggle-events-first-element">
    1st element
  </button>
  <button type="button" class="xt-button text-3xs py-1.5 px-2.5 rounded-md ${buttonPrimary()}" id="demo--toggle-events-first-target">
    1st target
  </button>
  <button type="button" class="xt-button text-3xs py-1.5 px-2.5 rounded-md ${buttonPrimary()}" id="demo--toggle-events-autostart">
    Autostart
  </button>
  <button type="button" class="xt-button text-3xs py-1.5 px-2.5 rounded-md ${buttonPrimary()}" id="demo--toggle-events-autostop">
    Autostop
  </button>
  <button type="button" class="xt-button text-3xs py-1.5 px-2.5 rounded-md ${buttonPrimary()}" id="demo--toggle-events-add">
    Add
  </button>
  <button type="button" class="xt-button text-3xs py-1.5 px-2.5 rounded-md ${buttonPrimary()}" id="demo--toggle-events-remove">
    Remove
  </button>
  <button type="button" class="xt-button text-3xs py-1.5 px-2.5 rounded-md ${buttonPrimary()}" id="demo--toggle-events-reinit">
    Reinit
  </button>
  <button type="button" class="xt-button text-3xs py-1.5 px-2.5 rounded-md ${buttonPrimary()}" id="demo--toggle-events-restart">
    Restart
  </button>
  <button type="button" class="xt-button text-3xs py-1.5 px-2.5 rounded-md ${buttonPrimary()}" id="demo--toggle-events-destroy">
    Destroy
  </button>
  <button type="button" class="xt-button text-3xs py-1.5 px-2.5 rounded-md ${buttonPrimary()}" id="demo--toggle-events-unmount">
    Unmount
  </button>
</div>

<div id="demo--toggle-events">

  <div class="xt-list xt-list-3 items-center mb-4" id="demo--toggle-events-elements">
    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}" data-xt-group="0">
      Toggle Group 0
    </button>
    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}" data-xt-group="0">
      Toggle Group 0
    </button>
    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
      Toggle 1
    </button>
    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
      Toggle 2
    </button>
  </div>

  <div class="xt-list xt-list-3 items-center" id="demo--toggle-events-targets">
    <div class="xt-card xt-toggle rounded-md ${cardToggle()}" data-xt-group="0">
      Target Group 0
    </div>
    <div class="xt-card xt-toggle rounded-md ${cardToggle()}" data-xt-group="0">
      Target Group 0
    </div>
    <div class="xt-card xt-toggle rounded-md ${cardToggle()}">
      Target 1
    </div>
    <div class="xt-card xt-toggle rounded-md ${cardToggle()}">
      Target 2
    </div>
  </div>

</div>

<div class="xt-card rounded-md ${cardDefault()} mt-6">
  <div class="text-sm p-6 overflow-y-auto overflow-x-hidden xt-overflow-sub max-h-56" id="demo--toggle-events-log">
  </div>
</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
