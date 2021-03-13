import React from 'react'
import path from 'path'

const markupSlider = require('components/snippets/markup-slider').default
const indentString = require('indent-string')
const classes = require('components/snippets/classes').classes

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
const demo = {
  container: true,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center mb-4">
  <button type="button" class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}" id="demo--slider-events-first-element">
    1st element
  </button>
  <button type="button" class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}" id="demo--slider-events-first-target">
    1st target
  </button>
  <button type="button" class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}" id="demo--toggle-events-autostart">
    Autostart
  </button>
  <button type="button" class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}" id="demo--toggle-events-autostop">
    Autostop
  </button>
  <button type="button" class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}" id="demo--slider-events-add">
    Add
  </button>
  <button type="button" class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}" id="demo--slider-events-remove">
    Remove
  </button>
  <button type="button" class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}" id="demo--slider-events-reinit">
    Reinit
  </button>
  <button type="button" class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}" id="demo--slider-events-restart">
    Restart
  </button>
  <button type="button" class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}" id="demo--slider-events-destroy">
    Destroy
  </button>
  <button type="button" class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}" id="demo--slider-events-unmount">
    Unmount
  </button>
</div>

<div class="xt-slider" id="demo--slider-events">
${indentString(markupSlider(), 2)}
</div>

<div class="xt-card rounded-md ${classes.cardDefault()} mt-6">
  <div class="${classes.cardSm()} overflow-y-auto overflow-x-hidden xt-overflow-sub max-h-56" id="demo--slider-events-log">
  </div>
</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
