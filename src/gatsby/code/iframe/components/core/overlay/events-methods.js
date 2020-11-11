import React from 'react'
import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const btnDefault = require('components/snippets/classes/btn-default').default
const cardDefault = require('components/snippets/classes/card-default').default
const cardDefaultOverlay = require('components/snippets/classes/card-default-overlay').default
const iconX = require('components/snippets/icons').iconX

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
  <button type="button" class="btn btn-sm rounded-md ${btnPrimary()}" id="demo--overlay-events-first-element">
    1st element
  </button>
  <button type="button" class="btn btn-sm rounded-md ${btnPrimary()}" id="demo--overlay-events-first-target">
    1st target
  </button>
  <button type="button" class="btn btn-sm rounded-md ${btnPrimary()}" id="demo--overlay-events-block">
    Block/Unblock
  </button>
  <button type="button" class="btn btn-sm rounded-md ${btnPrimary()}" id="demo--overlay-events-reinit">
    Reinit
  </button>
  <button type="button" class="btn btn-sm rounded-md ${btnPrimary()}" id="demo--overlay-events-restart">
    Restart
  </button>
  <button type="button" class="btn btn-sm rounded-md ${btnPrimary()}" id="demo--overlay-events-destroy">
    Destroy
  </button>
  <button type="button" class="btn btn-sm rounded-md ${btnPrimary()}" id="demo--overlay-events-unmount">
    Unmount
  </button>
</div>

<div class="list list-1 items-center mb-4">
  <button type="button" class="btn btn-md rounded-md ${btnDefault()}" id="demo--overlay-events">
    Toggle 0
  </button>
  <button type="button" class="btn btn-md rounded-md ${btnDefault()}" id="demo--overlay-events-alt">
    Toggle 1
  </button>
</div>

<div class="overlay" id="overlay-nested">
  <div class="overlay-container max-w-5xl">
    <div class="overlay-inner">

      <div class="card rounded-md shadow-overlay ${cardDefaultOverlay()}">
        <div class="btn btn-close p-5 text-2xl" aria-label="Close">
          ${iconX()}
        </div>
        <div class="card-md md:card-lg">
          <div class="h3">Overlay</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat, ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
          <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
        </div>
      </div>

    </div>
  </div>
</div>

<div class="card rounded-md ${cardDefault()} mt-6">
  <div class="card-sm overflow-y-auto overflow-x-hidden overflow-sub max-h-56" id="demo--overlay-events-log">
  </div>
</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
