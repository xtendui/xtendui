import React from 'react'
import path from 'path'
const markupSlider = require('components/snippets/components/markup-slider-event-methods').default
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
<div class="list list-default list-space-tiny align-items-center">
  <button type="button" class="btn btn-primary btn-tiny" id="demo--slider-events-first-element">
    1st element
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo--slider-events-first-target">
    1st target
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo--toggle-events-autostart">
    Autostart
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo--toggle-events-autostop">
    Autostop
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo--slider-events-add">
    Add
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo--slider-events-remove">
    Remove
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo--slider-events-reinit">
    Reinit
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo--slider-events-restart">
    Restart
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo--slider-events-destroy">
    Destroy
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo--slider-events-unmount">
    Unmount
  </button>
</div>

<br/>

<div class="slider" id="demo--slider-events">
${indentString(markupSlider(), 2)}
</div>

<br/>

<div class="card card-default card-small">
  <div class="card-design"></div>
  <div class="card-inner">
    <div class="card-content">
      <div class="card-block card-item card-overflow-y" id="demo--slider-events-log">
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
