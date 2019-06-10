import React from "react"
import path from "path";

import DemoVanillaIframe from "components/demo-vanilla-iframe"

const demo = {
  name: path.basename(__filename, '.js'),
  js: true,
  css: true,
  full: false
}
demo.htmlSource = `
<div class="list list-space--small align-items--center" id="toggle-0">
  <button type="button" class="btn">
    <span>Toggle 0</span>
  </button>
  <button type="button" class="btn">
    <span>Toggle 1</span>
  </button>
  <button type="button" class="btn">
    <span>Toggle 2</span>
  </button>
  <div class="alert toggle--block">
    <div class="alert_content">
      Target 0
    </div>
  </div>
  <div class="alert toggle--block">
    <div class="alert_content">
      Target 1
    </div>
  </div>
  <div class="alert toggle--block">
    <div class="alert_content">
      Target 2
    </div>
  </div>
</div>

<br>

<div class="list list-space--small align-items--center" id="toggle-1">
  <button type="button" class="btn">
    <span>Toggle 0</span>
  </button>
  <button type="button" class="btn">
    <span>Toggle 1</span>
  </button>
  <button type="button" class="btn">
    <span>Toggle 2</span>
  </button>
  <div class="alert toggle--block">
    <div class="alert_content">
      Target 0
    </div>
  </div>
  <div class="alert toggle--block">
    <div class="alert_content">
      Target 1
    </div>
  </div>
  <div class="alert toggle--block">
    <div class="alert_content">
      Target 2
    </div>
  </div>
</div>
`

class Page extends React.Component {
  componentDidMount() {
    if (demo.js) {
      require("./" + demo.name + ".source.js")
    }
  }

  render() {
    if (demo.js) {
      demo.jsSource = require("!!raw-loader!./" + demo.name + ".source.js").default
    }
    if (demo.css) {
      demo.cssSource = require("!!raw-loader!./" + demo.name + ".source.less").default
      demo.css = demo.css ? require("!raw-loader!less-loader!./" + demo.name + ".source.less").default : null
    }
    return (
      <DemoVanillaIframe demo={demo}/>
    )
  }
}

export default Page
