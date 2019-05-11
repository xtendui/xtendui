import React from "react"

import DemoIframe from "components/demo-iframe"

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
      <button type="button" class="group">
        <span class="group_inner">
          <span class="btn btn--primary">
            <span>btn 1a</span>
          </span>
          <span class="btn btn--primary-empty">
            <span>btn 1b</span>
          </span>
        </span>
        <span class="group_inner">
          <span class="btn btn--secondary">
            <span>btn 2a</span>
          </span>
          <span class="btn btn--secondary-empty">
            <span>btn 2b</span>
          </span>
        </span>
        <span class="group_inner">
          <span class="btn btn--primary">
            <span>btn 3a</span>
          </span>
          <span class="btn btn--primary-empty">
            <span>btn 3b</span>
          </span>
        </span>
        <span class="group_inner">
          <span class="btn btn--secondary">
            <span>btn 4a</span>
          </span>
          <span class="btn btn--secondary-empty">
            <span>btn 4b</span>
          </span>
        </span>
      </button>
    `
    let jsSource = demo.js ? require("!!raw-loader!./" + demo.name + ".source.js").default : null
    let cssSource = demo.css ? require("!!raw-loader!./" + demo.name + ".source.less").default : null
    return (
      <DemoIframe demo={demo} htmlSource={htmlSource} jsSource={jsSource} cssSource={cssSource}/>
    )
  }
}

export default Page
