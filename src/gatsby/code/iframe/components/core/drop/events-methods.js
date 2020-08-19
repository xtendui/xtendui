import React from 'react'
import path from 'path'
const markupDrop = require('components/snippets/components/markup-drop').default
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
<div class="list list-default list-space-1 items-center">
  <button type="button" class="btn btn-primary btn-tiny" id="demo--drop-events-first-element">
    1st element
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo--drop-events-first-target">
    1st target
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo--drop-events-add">
    Add
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo--drop-events-remove">
    Remove
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo--drop-events-block">
    Block/Unblock
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo--drop-events-reinit">
    Reinit
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo--drop-events-restart">
    Restart
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo--drop-events-destroy">
    Destroy
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo--drop-events-unmount">
    Unmount
  </button>
</div>

<br/>

<div class="list list-default list-space-2 items-center" id="demo--drop-events">

  <div class="drop-container">
    <button type="button" class="btn btn-primary">
      drop
    </button>
    <div class="drop drop-default">
    ${indentString(markupDrop(), 4)}
    </div>
  </div>

  <div class="drop-container">
    <button type="button" class="btn btn-primary">
      drop
    </button>
    <div class="drop drop-default">
    ${indentString(markupDrop(), 4)}
    </div>
  </div>

</div>

<br/>

<div class="card card-default card-small">
  <div class="card-design"></div>
  <div class="card-inner">
    <div class="card-content">
      <div class="card-block card-item card-overflow-y" id="demo--drop-events-log">
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
