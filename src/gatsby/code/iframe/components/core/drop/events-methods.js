import React from 'react'
import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardDefault = require('components/snippets/classes/card-default').default
const btnDefaultDrop = require('components/snippets/classes/btn-default-drop').default
const cardDefaultDropList = require('components/snippets/classes/card-default-drop-list').default

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
  <button type="button" class="btn btn-sm rounded-md ${btnPrimary()}" id="demo--drop-events-first-element">
    1st element
  </button>
  <button type="button" class="btn btn-sm rounded-md ${btnPrimary()}" id="demo--drop-events-first-target">
    1st target
  </button>
  <button type="button" class="btn btn-sm rounded-md ${btnPrimary()}" id="demo--drop-events-add">
    Add
  </button>
  <button type="button" class="btn btn-sm rounded-md ${btnPrimary()}" id="demo--drop-events-remove">
    Remove
  </button>
  <button type="button" class="btn btn-sm rounded-md ${btnPrimary()}" id="demo--drop-events-block">
    Block/Unblock
  </button>
  <button type="button" class="btn btn-sm rounded-md ${btnPrimary()}" id="demo--drop-events-reinit">
    Reinit
  </button>
  <button type="button" class="btn btn-sm rounded-md ${btnPrimary()}" id="demo--drop-events-restart">
    Restart
  </button>
  <button type="button" class="btn btn-sm rounded-md ${btnPrimary()}" id="demo--drop-events-destroy">
    Destroy
  </button>
  <button type="button" class="btn btn-sm rounded-md ${btnPrimary()}" id="demo--drop-events-unmount">
    Unmount
  </button>
</div>

<div class="list list-2 items-center" id="demo--drop-events" title="Object">

  <div class="drop-container">

    <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
      Element 0
    </button>

    <div class="drop" title="Target 0">
      <div class="drop-inner">
        <div class="w-64 py-3 rounded-md ${cardDefaultDropList()}">
          <nav class="list flex-col">
            <a href="#" class="btn btn-sm ${btnDefaultDrop()}">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </a>
            <button type="button" class="btn btn-sm ${btnDefaultDrop()}">
              Dolor sit
            </button>
            <button type="button" class="btn btn-sm ${btnDefaultDrop()}">
              Amet
            </button>
          </nav>
        </div>
      </div>
    </div>

  </div>

  <div class="drop-container">

    <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
      Element 1
    </button>

    <div class="drop" title="Target 1">
      <div class="drop-inner">
        <div class="w-64 py-3 rounded-md ${cardDefaultDropList()}">
          <nav class="list flex-col">
            <a href="#" class="btn btn-sm ${btnDefaultDrop()}">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </a>
            <button type="button" class="btn btn-sm ${btnDefaultDrop()}">
              Dolor sit
            </button>
            <button type="button" class="btn btn-sm ${btnDefaultDrop()}">
              Amet
            </button>
          </nav>
        </div>
      </div>
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
