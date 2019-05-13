import React from "react"

import DemoVanillaIframe from "components/demo-vanilla-iframe"

const demo = {
  name: 'stack',
  js: false,
  css: false,
  full: false
}

class Page extends React.Component {
  componentDidMount() {
    if (demo.js) {
      require("./" + demo.name + ".source.js")
    }
    if (demo.css) {
      require("./" + demo.name + ".source.less")
    }
  }

  render() {
    let htmlSource = `
      <div class="group full">
        <span class="group_inner">
          <button type="button" class="btn btn--primary">
            <span>btn 1a</span>
          </button>
          <button type="button" class="btn btn--primary-empty">
            <span>btn 1b</span>
          </button>
        </span>
        <span class="group_inner">
          <button type="button" class="btn btn--secondary">
            <span>btn 2a</span>
          </button>
          <button type="button" class="btn btn--secondary-empty">
            <span>btn 2b</span>
          </button>
        </span>
        <input type="text" class="form-input">
        <span class="group_inner">
          <button type="button" class="btn btn--primary">
            <span>btn 3a</span>
          </button>
          <button type="button" class="btn btn--primary-empty">
            <span>btn 3b</span>
          </button>
        </span>
        <span class="group_inner">
          <button type="button" class="btn btn--secondary">
            <span>btn 4a</span>
          </button>
          <button type="button" class="btn btn--secondary-empty">
            <span>btn 4b</span>
          </button>
        </span>
      </div>
    `
    let jsSource = demo.js ? require("!!raw-loader!./" + demo.name + ".source.js").default : null
    let cssSource = demo.css ? require("!!raw-loader!./" + demo.name + ".source.less").default : null
    return (
      <DemoVanillaIframe demo={demo} htmlSource={htmlSource} jsSource={jsSource} cssSource={cssSource}/>
    )
  }
}

export default Page
