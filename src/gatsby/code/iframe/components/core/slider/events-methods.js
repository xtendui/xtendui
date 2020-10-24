import React from 'react'
import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardDefault = require('components/snippets/classes/card-default').default
const markupSlider = require('components/snippets/components/markup-slider-event-method').default
const indentString = require('indent-string')

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
<div class="list list-1 items-center mb-4">
  <button type="button" class="btn btn-sm ${btnPrimary()}" id="demo--slider-events-first-element">
    1st element
  </button>
  <button type="button" class="btn btn-sm ${btnPrimary()}" id="demo--slider-events-first-target">
    1st target
  </button>
  <button type="button" class="btn btn-sm ${btnPrimary()}" id="demo--toggle-events-autostart">
    Autostart
  </button>
  <button type="button" class="btn btn-sm ${btnPrimary()}" id="demo--toggle-events-autostop">
    Autostop
  </button>
  <button type="button" class="btn btn-sm ${btnPrimary()}" id="demo--slider-events-add">
    Add
  </button>
  <button type="button" class="btn btn-sm ${btnPrimary()}" id="demo--slider-events-remove">
    Remove
  </button>
  <button type="button" class="btn btn-sm ${btnPrimary()}" id="demo--slider-events-block">
    Block/Unblock
  </button>
  <button type="button" class="btn btn-sm ${btnPrimary()}" id="demo--slider-events-reinit">
    Reinit
  </button>
  <button type="button" class="btn btn-sm ${btnPrimary()}" id="demo--slider-events-restart">
    Restart
  </button>
  <button type="button" class="btn btn-sm ${btnPrimary()}" id="demo--slider-events-destroy">
    Destroy
  </button>
  <button type="button" class="btn btn-sm ${btnPrimary()}" id="demo--slider-events-unmount">
    Unmount
  </button>
</div>

<div class="slider" id="demo--slider-events">
${indentString(markupSlider(), 2)}
</div>

<div class="card ${cardDefault()} mt-6">
  <div class="card-sm overflow-y-auto overflow-x-hidden overflow-sub max-h-56" id="demo--slider-events-log">
  </div>
</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
