import React from 'react'
import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardDefault = require('components/snippets/classes/card-default').default
const btnDefaultDrop = require('components/snippets/classes/btn-default-drop').default
const cardWhite = require('components/snippets/classes/card-white').default

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: true,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-2 items-center mb-4">
  <button type="button" class="btn text-xxs py-1.5 px-2.5 rounded-md ${btnPrimary()}" id="demo--drop-events-first-element">
    1st element
  </button>
  <button type="button" class="btn text-xxs py-1.5 px-2.5 rounded-md ${btnPrimary()}" id="demo--drop-events-first-target">
    1st target
  </button>
  <button type="button" class="btn text-xxs py-1.5 px-2.5 rounded-md ${btnPrimary()}" id="demo--drop-events-add">
    Add
  </button>
  <button type="button" class="btn text-xxs py-1.5 px-2.5 rounded-md ${btnPrimary()}" id="demo--drop-events-remove">
    Remove
  </button>
  <button type="button" class="btn text-xxs py-1.5 px-2.5 rounded-md ${btnPrimary()}" id="demo--drop-events-block">
    Block/Unblock
  </button>
  <button type="button" class="btn text-xxs py-1.5 px-2.5 rounded-md ${btnPrimary()}" id="demo--drop-events-reinit">
    Reinit
  </button>
  <button type="button" class="btn text-xxs py-1.5 px-2.5 rounded-md ${btnPrimary()}" id="demo--drop-events-restart">
    Restart
  </button>
  <button type="button" class="btn text-xxs py-1.5 px-2.5 rounded-md ${btnPrimary()}" id="demo--drop-events-destroy">
    Destroy
  </button>
  <button type="button" class="btn text-xxs py-1.5 px-2.5 rounded-md ${btnPrimary()}" id="demo--drop-events-unmount">
    Unmount
  </button>
</div>

<div class="list list-2 items-center" id="demo--drop-events" title="Object">

  <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
    Element 0
  </button>

  <div class="drop" title="Target 0">
    <div class="card w-64 py-3 rounded-md shadow-drop ${cardWhite()}">
      <nav class="list flex-col">
        <a href="#" class="btn text-xxs py-1.5 px-2.5 ${btnDefaultDrop()}">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </a>
        <button type="button" class="btn text-xxs py-1.5 px-2.5 ${btnDefaultDrop()}">
          Dolor sit
        </button>
        <button type="button" class="btn text-xxs py-1.5 px-2.5 ${btnDefaultDrop()}">
          Amet
        </button>
      </nav>
    </div>
  </div>

  <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
    Element 1
  </button>

  <div class="drop" title="Target 1">
    <div class="card w-64 py-3 rounded-md shadow-drop ${cardWhite()}">
      <nav class="list flex-col">
        <a href="#" class="btn text-xxs py-1.5 px-2.5 ${btnDefaultDrop()}">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </a>
        <button type="button" class="btn text-xxs py-1.5 px-2.5 ${btnDefaultDrop()}">
          Dolor sit
        </button>
        <button type="button" class="btn text-xxs py-1.5 px-2.5 ${btnDefaultDrop()}">
          Amet
        </button>
      </nav>
    </div>
  </div>

</div>

<div class="card rounded-md ${cardDefault()} mt-6">
  <div class="card-sm overflow-y-auto overflow-x-hidden overflow-sub max-h-56" id="demo--drop-events-log">
  </div>
</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
