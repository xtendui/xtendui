import React from 'react'
import path from 'path'

const buttonSm = require('components/snippets/classes').buttonSm
const buttonMd = require('components/snippets/classes').buttonMd
const cardSm = require('components/snippets/classes').cardSm
const cardMd = require('components/snippets/classes').cardMd
const buttonPrimary = require('components/snippets/classes').buttonPrimary
const buttonDefault = require('components/snippets/classes').buttonDefault
const cardDefault = require('components/snippets/classes').cardDefault
const cardWhite = require('components/snippets/classes').cardWhite
const iconX = require('components/snippets/icons').iconX

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
  <button type="button" class="xt-button ${buttonSm()} rounded-md ${buttonPrimary()}" id="demo--overlay-events-first-element">
    1st element
  </button>
  <button type="button" class="xt-button ${buttonSm()} rounded-md ${buttonPrimary()}" id="demo--overlay-events-first-target">
    1st target
  </button>
  <button type="button" class="xt-button ${buttonSm()} rounded-md ${buttonPrimary()}" id="demo--overlay-events-reinit">
    Reinit
  </button>
  <button type="button" class="xt-button ${buttonSm()} rounded-md ${buttonPrimary()}" id="demo--overlay-events-restart">
    Restart
  </button>
  <button type="button" class="xt-button ${buttonSm()} rounded-md ${buttonPrimary()}" id="demo--overlay-events-destroy">
    Destroy
  </button>
  <button type="button" class="xt-button ${buttonSm()} rounded-md ${buttonPrimary()}" id="demo--overlay-events-unmount">
    Unmount
  </button>
</div>

<div class="xt-list xt-list-3 items-center mb-4">
  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}" id="demo--overlay-events">
    Overlay
  </button>
  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}" id="demo--overlay-events-alt">
    Overlay same
  </button>
</div>

<div class="xt-overlay" id="overlay--nested">
  <div class="xt-backdrop bg-black opacity-25"></div>
  <div class="xt-overlay-container max-w-5xl">
    <div class="xt-overlay-inner">

      <div class="xt-card rounded-md shadow-overlay ${cardWhite()}">
        <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl" aria-label="Close">
          ${iconX()}
        </button>
        <div class="${cardMd()} md:text-lg md:p-10">
          <div class="xt-h3">Overlay</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat, ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
          <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
        </div>
      </div>

    </div>
  </div>
</div>

<div class="xt-card rounded-md ${cardDefault()} mt-6">
  <div class="${cardSm()} overflow-y-auto overflow-x-hidden xt-overflow-sub max-h-56" id="demo--overlay-events-log">
  </div>
</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
