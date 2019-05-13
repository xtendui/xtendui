import React from "react"

import DemoVanillaIframe from "components/demo-vanilla-iframe"

const demo = {
  name: 'number',
  js: true,
  css: true,
  full: true
}

class Page extends React.Component {
  componentDidMount() {
    if (demo.js) {
      require("./" + demo.name + ".source.js")
    }
  }

  render() {
    demo.htmlSource = `
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
    demo.jsSource = require("!!raw-loader!./" + demo.name + ".source.js").default
    demo.cssSource = require("!!raw-loader!./" + demo.name + ".source.less").default
    demo.css = demo.css ? require("!raw-loader!less-loader!./" + demo.name + ".source.less").default : null
    return (
      <DemoVanillaIframe demo={demo}/>
    )
  }
}

export default Page
