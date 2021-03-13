import React from 'react'
import path from 'path'

const classes = require('components/snippets/classes').classes

import DemoIframe from 'components/demo/demo-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
const demo = {
  container: true,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center mb-4">
  <button type="button" class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}" id="demo--tooltip-events-first-element">
    1st element
  </button>
  <button type="button" class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}" id="demo--tooltip-events-first-target">
    1st target
  </button>
  <button type="button" class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}" id="demo--tooltip-events-add">
    Add
  </button>
  <button type="button" class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}" id="demo--tooltip-events-remove">
    Remove
  </button>
  <button type="button" class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}" id="demo--tooltip-events-reinit">
    Reinit
  </button>
  <button type="button" class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}" id="demo--tooltip-events-restart">
    Restart
  </button>
  <button type="button" class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}" id="demo--tooltip-events-destroy">
    Destroy
  </button>
  <button type="button" class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}" id="demo--tooltip-events-unmount">
    Unmount
  </button>
</div>

<div class="xt-list xt-list-3 items-center" id="demo--tooltip-events" title="Object">

  <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
    Tooltip 0
  </button>

  <div class="xt-tooltip p-2" title="Target 0">
    <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
      Lorem ipsum dolor sit amet
    </div>
  </div>

  <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
    Tooltip 1
  </button>

  <div class="xt-tooltip p-2" title="Target 1">
    <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
      Lorem ipsum dolor sit amet
    </div>
  </div>

</div>

<div class="xt-card rounded-md ${classes.cardDefault()} mt-6">
  <div class="${classes.cardSm()} overflow-y-auto overflow-x-hidden xt-overflow-sub max-h-56" id="demo--tooltip-events-log">
  </div>
</div>
`

class Page extends React.Component {
  render() {
    return <DemoIframe demo={demo} />
  }
}

export default Page
