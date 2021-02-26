import React from 'react'
import path from 'path'

const buttonSm = require('components/snippets/classes').buttonSm
const buttonMd = require('components/snippets/classes').buttonMd
const cardSm = require('components/snippets/classes').cardSm
const buttonDefault = require('components/snippets/classes').buttonDefault
const buttonPrimary = require('components/snippets/classes').buttonPrimary
const cardDefault = require('components/snippets/classes').cardDefault
const cardToggle = require('components/snippets/classes').cardToggle

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
  <button type="button" class="xt-button ${buttonSm()} rounded-md ${buttonPrimary()}" id="demo--toggle-events-first-element">
    1st element
  </button>
  <button type="button" class="xt-button ${buttonSm()} rounded-md ${buttonPrimary()}" id="demo--toggle-events-first-target">
    1st target
  </button>
  <button type="button" class="xt-button ${buttonSm()} rounded-md ${buttonPrimary()}" id="demo--toggle-events-autostart">
    Autostart
  </button>
  <button type="button" class="xt-button ${buttonSm()} rounded-md ${buttonPrimary()}" id="demo--toggle-events-autostop">
    Autostop
  </button>
  <button type="button" class="xt-button ${buttonSm()} rounded-md ${buttonPrimary()}" id="demo--toggle-events-add">
    Add
  </button>
  <button type="button" class="xt-button ${buttonSm()} rounded-md ${buttonPrimary()}" id="demo--toggle-events-remove">
    Remove
  </button>
  <button type="button" class="xt-button ${buttonSm()} rounded-md ${buttonPrimary()}" id="demo--toggle-events-reinit">
    Reinit
  </button>
  <button type="button" class="xt-button ${buttonSm()} rounded-md ${buttonPrimary()}" id="demo--toggle-events-restart">
    Restart
  </button>
  <button type="button" class="xt-button ${buttonSm()} rounded-md ${buttonPrimary()}" id="demo--toggle-events-destroy">
    Destroy
  </button>
  <button type="button" class="xt-button ${buttonSm()} rounded-md ${buttonPrimary()}" id="demo--toggle-events-unmount">
    Unmount
  </button>
</div>

<div id="demo--toggle-events">

  <div class="xt-list xt-list-3 items-center mb-4" id="demo--toggle-events-elements">
    <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}" data-xt-group="0">
      Toggle Group 0
    </button>
    <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}" data-xt-group="0">
      Toggle Group 0
    </button>
    <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}">
      Toggle 1
    </button>
    <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}">
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
  <div class="${cardSm()} overflow-y-auto overflow-x-hidden xt-overflow-sub max-h-56" id="demo--toggle-events-log">
  </div>
</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
