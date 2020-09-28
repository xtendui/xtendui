import React from 'react'
import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const btnDefault = require('components/snippets/classes/btn-default').default
const cardDefault = require('components/snippets/classes/card-default').default
const cardDefaultOverlay = require('components/snippets/classes/card-default-overlay').default

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
<div class="list list-space-1 items-center">
  <button type="button" class="btn btn-sm ${btnPrimary()}" id="demo--overlay-events-first-element">
    1st element
  </button>
  <button type="button" class="btn btn-sm ${btnPrimary()}" id="demo--overlay-events-first-target">
    1st target
  </button>
  <button type="button" class="btn btn-sm ${btnPrimary()}" id="demo--overlay-events-block">
    Block/Unblock
  </button>
  <button type="button" class="btn btn-sm ${btnPrimary()}" id="demo--overlay-events-reinit">
    Reinit
  </button>
  <button type="button" class="btn btn-sm ${btnPrimary()}" id="demo--overlay-events-restart">
    Restart
  </button>
  <button type="button" class="btn btn-sm ${btnPrimary()}" id="demo--overlay-events-destroy">
    Destroy
  </button>
  <button type="button" class="btn btn-sm ${btnPrimary()}" id="demo--overlay-events-unmount">
    Unmount
  </button>
</div>

<br/>

<div class="list list-space-1 items-center">
  <button type="button" class="btn btn-md ${btnDefault()}" id="demo--overlay-events">
    Open Overlay
  </button>
  <button type="button" class="btn btn-md ${btnDefault()}" id="demo--overlay-events-alt">
    Open Same Overlay
  </button>
</div>

<div class="overlay" id="overlay-nested">
  <div class="overlay-container max-w-4xl">
    <div class="overlay-inner">

      <div class="card ${cardDefaultOverlay()}">
        <div class="btn btn-close" aria-label="Close"><span class="icon-close"></span></div>
        <div class="card-block card-block-lg">
          <div class="h3">Lorem ipsum</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat, ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
          <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
        </div>
      </div>

    </div>
  </div>
</div>

<div class="card ${cardDefault()} mt-6">
  <div class="card-block card-block-sm text-sm overflow-y-auto overflow-x-hidden overflow-sub max-h-56" id="demo--overlay-events-log">
  </div>
</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
