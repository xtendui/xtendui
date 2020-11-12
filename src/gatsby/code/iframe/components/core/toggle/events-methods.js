import React from 'react'
import path from 'path'
const btnDefault = require('components/snippets/classes/btn-default').default
const btnPrimary = require('components/snippets/classes/btn-primary').default
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
<div class="list list-1 items-center mb-4">
  <button type="button" class="btn btn-sm rounded-md ${btnPrimary()}" id="demo--toggle-events-first-element">
    1st element
  </button>
  <button type="button" class="btn btn-sm rounded-md ${btnPrimary()}" id="demo--toggle-events-first-target">
    1st target
  </button>
  <button type="button" class="btn btn-sm rounded-md ${btnPrimary()}" id="demo--toggle-events-autostart">
    Autostart
  </button>
  <button type="button" class="btn btn-sm rounded-md ${btnPrimary()}" id="demo--toggle-events-autostop">
    Autostop
  </button>
  <button type="button" class="btn btn-sm rounded-md ${btnPrimary()}" id="demo--toggle-events-add">
    Add
  </button>
  <button type="button" class="btn btn-sm rounded-md ${btnPrimary()}" id="demo--toggle-events-remove">
    Remove
  </button>
  <button type="button" class="btn btn-sm rounded-md ${btnPrimary()}" id="demo--toggle-events-block">
    Block/Unblock
  </button>
  <button type="button" class="btn btn-sm rounded-md ${btnPrimary()}" id="demo--toggle-events-reinit">
    Reinit
  </button>
  <button type="button" class="btn btn-sm rounded-md ${btnPrimary()}" id="demo--toggle-events-restart">
    Restart
  </button>
  <button type="button" class="btn btn-sm rounded-md ${btnPrimary()}" id="demo--toggle-events-destroy">
    Destroy
  </button>
  <button type="button" class="btn btn-sm rounded-md ${btnPrimary()}" id="demo--toggle-events-unmount">
    Unmount
  </button>
</div>

<div id="demo--toggle-events">

  <div class="list list-2 items-center mb-4" id="demo--toggle-events-elements">
    <button type="button" class="btn btn-md rounded-md ${btnDefault()}" data-xt-group="0">
      Toggle Group 0
    </button>
    <button type="button" class="btn btn-md rounded-md ${btnDefault()}" data-xt-group="0">
      Toggle Group 0
    </button>
    <button type="button" class="btn btn-md rounded-md ${btnDefault()}">
      Toggle 1
    </button>
    <button type="button" class="btn btn-md rounded-md ${btnDefault()}">
      Toggle 2
    </button>
  </div>

  <div class="list list-2 items-center" id="demo--toggle-events-targets">
    <div class="card toggle rounded-md ${cardToggle()}" data-xt-group="0">
      Target Group 0
    </div>
    <div class="card toggle rounded-md ${cardToggle()}" data-xt-group="0">
      Target Group 0
    </div>
    <div class="card toggle rounded-md ${cardToggle()}">
      Target 1
    </div>
    <div class="card toggle rounded-md ${cardToggle()}">
      Target 2
    </div>
  </div>

</div>

<div class="card rounded-md ${cardDefault()} mt-6">
  <div class="card-sm overflow-y-auto overflow-x-hidden overflow-sub max-h-56" id="demo--toggle-events-log">
  </div>
</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
