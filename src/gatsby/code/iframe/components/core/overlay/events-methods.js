import React from 'react'
import path from 'path'
const buttonPrimary = require('components/snippets/classes/button-primary').default
const buttonDefault = require('components/snippets/classes/button-default').default
const cardDefault = require('components/snippets/classes/card-default').default
const cardWhite = require('components/snippets/classes/card-white').default
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
  <button type="button" class="xt-button text-3xs py-1.5 px-2.5 rounded-md ${buttonPrimary()}" id="demo--overlay-events-first-element">
    1st element
  </button>
  <button type="button" class="xt-button text-3xs py-1.5 px-2.5 rounded-md ${buttonPrimary()}" id="demo--overlay-events-first-target">
    1st target
  </button>
  <button type="button" class="xt-button text-3xs py-1.5 px-2.5 rounded-md ${buttonPrimary()}" id="demo--overlay-events-reinit">
    Reinit
  </button>
  <button type="button" class="xt-button text-3xs py-1.5 px-2.5 rounded-md ${buttonPrimary()}" id="demo--overlay-events-restart">
    Restart
  </button>
  <button type="button" class="xt-button text-3xs py-1.5 px-2.5 rounded-md ${buttonPrimary()}" id="demo--overlay-events-destroy">
    Destroy
  </button>
  <button type="button" class="xt-button text-3xs py-1.5 px-2.5 rounded-md ${buttonPrimary()}" id="demo--overlay-events-unmount">
    Unmount
  </button>
</div>

<div class="xt-list xt-list-3 items-center mb-4">
  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}" id="demo--overlay-events">
    Toggle 0
  </button>
  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}" id="demo--overlay-events-alt">
    Toggle 1
  </button>
</div>

<div class="xt-overlay" id="overlay-nested">
  <div class="xt-overlay-container max-w-5xl">
    <div class="xt-overlay-inner">

      <div class="xt-card rounded-md shadow-overlay ${cardWhite()}">
        <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl" aria-label="Close">
          ${iconX()}
        </button>
        <div class="text-base p-8 md:text-lg md:p-10">
          <div class="xt-h3 ">Overlay</div>
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
  <div class="text-sm p-6 overflow-y-auto overflow-x-hidden xt-overflow-sub max-h-56" id="demo--overlay-events-log">
  </div>
</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
