import React from "react"

import DemoIframe from "components/demo-iframe"

const demo = {
  name: 'number',
  full: false
}

class Page extends React.Component {
  componentDidMount() {
    require("./" + demo.name + ".source.js")
    require("./" + demo.name + ".source.less")
  }

  render() {
    let htmlSource = `
      <h4>Line</h4>
      
      <div class="group group-number group-number-line">
          <span class="group_inner">
            <button type="button" class="btn group-number-remove">
              <span>-</span>
            </button>
          </span>
        <input type="number" class="form-input" value="3" data-min="1" data-max="100">
        <span class="group_inner">
            <button type="button" class="btn group-number-add">
              <span>+</span>
            </button>
          </span>
      </div>
      
      <h4>Stack</h4>
      
      <div class="group group-number group-number-stack">
        <input type="number" class="form-input" value="3" data-min="1" data-max="100">
        <span class="group_inner">
            <button type="button" class="btn btn--short btn--narrow group-number-add">
              <span>+</span>
            </button>
            <button type="button" class="btn btn--short btn--narrow group-number-remove">
              <span>-</span>
            </button>
          </span>
      </div>
    `
    let jsSource = require("!!raw-loader!./" + demo.name + ".source.js").default
    let cssSource = require("!!raw-loader!./" + demo.name + ".source.less").default
    return (
      <DemoIframe demo={demo} htmlSource={htmlSource} jsSource={jsSource} cssSource={cssSource}/>
    )
  }
}

export default Page
