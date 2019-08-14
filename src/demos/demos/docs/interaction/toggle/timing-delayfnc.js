import React from 'react'
import path from 'path'

import DemoVanillaIframe from 'components/demo-vanilla-iframe'

const demo = {
  name: path.basename(__filename, '.js'),
  js: false,
  css: true,
  full: true
}
demo.htmlSource = `
<div class="list list-space--small align-items--center"
     data-xt-toggle='{"delayOn": "return Math.min(current * 150, 300)", "delayOff": "return Math.min((total - current) * 150, 300)"}'>
  <button type="button" class="btn">
    <span>Toggle 0</span>
  </button>
  <button type="button" class="btn" data-xt-group="0">
    <span>Group 0</span>
  </button>
  <button type="button" class="btn" data-xt-group="1">
    <span>Group 1</span>
  </button>
  <div class="alert toggle--block">
    <div class="alert_content">
      Target 0
    </div>
  </div>
  <div class="alert toggle--block" data-xt-group="0">
    <div class="alert_content">
      Group 0a
    </div>
  </div>
  <div class="alert toggle--block" data-xt-group="1">
    <div class="alert_content">
      Group 1a
    </div>
  </div>
  <div class="alert toggle--block" data-xt-group="0">
    <div class="alert_content">
      Group 0b
    </div>
  </div>
  <div class="alert toggle--block" data-xt-group="0">
    <div class="alert_content">
      Group 0c
    </div>
  </div>
  <div class="alert toggle--block" data-xt-group="1">
    <div class="alert_content">
      Group 1b
    </div>
  </div>
  <div class="alert toggle--block" data-xt-group="1">
    <div class="alert_content">
      Group 1c
    </div>
  </div>
</div>

<br>

<div class="list list-space--small align-items--center"
     data-xt-toggle='{"on": "mouseenter", "off": "mouseleave", "delayOn": "return Math.min(current * 150, 500)", "delayOff": "return Math.min((total - current) * 150, 500)"}'>
  <button type="button" class="btn">
    <span>Toggle 0</span>
  </button>
  <button type="button" class="btn" data-xt-group="0">
    <span>Group 0</span>
  </button>
  <button type="button" class="btn" data-xt-group="1">
    <span>Group 1</span>
  </button>
  <div class="alert toggle--block">
    <div class="alert_content">
      Target 0
    </div>
  </div>
  <div class="alert toggle--block" data-xt-group="0">
    <div class="alert_content">
      Group 0a
    </div>
  </div>
  <div class="alert toggle--block" data-xt-group="1">
    <div class="alert_content">
      Group 1a
    </div>
  </div>
  <div class="alert toggle--block" data-xt-group="0">
    <div class="alert_content">
      Group 0b
    </div>
  </div>
  <div class="alert toggle--block" data-xt-group="0">
    <div class="alert_content">
      Group 0c
    </div>
  </div>
  <div class="alert toggle--block" data-xt-group="1">
    <div class="alert_content">
      Group 1b
    </div>
  </div>
  <div class="alert toggle--block" data-xt-group="1">
    <div class="alert_content">
      Group 1c
    </div>
  </div>
</div>
`

class Page extends React.Component {
  componentDidMount() {
    if (demo.js) {
      require('./' + demo.name + '.source.js')
    }
  }

  render() {
    if (demo.js) {
      demo.jsSource = require('!!raw-loader!./' + demo.name + '.source.js').default
    }
    if (demo.css) {
      demo.cssSource = require('!!raw-loader!./' + demo.name + '.source.less').default
      demo.css = demo.css ? require('!raw-loader!less-loader!./' + demo.name + '.source.less').default : null
    }
    return (
      <DemoVanillaIframe demo={demo}/>
    )
  }
}

export default Page
