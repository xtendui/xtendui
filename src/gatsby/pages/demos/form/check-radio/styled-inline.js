import React from "react"

import DemoVanillaIframe from "components/demo-vanilla-iframe"

const demo = {
  name: 'inline',
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
      <div class="form-item--inline">
        <div class="form-item">
          <input type="checkbox" id="checkbox-inline" checked>
          <label class="form-label" for="checkbox-inline">
            Lorem ipsum dolor
          </label>
        </div>

        <div class="form-item">
          <input type="radio" id="radio-inline-0" name="radio-inline" checked>
          <label class="form-label" for="radio-inline-0">
            Lorem ipsum dolor
          </label>
        </div>

        <div class="form-item">
          <input type="radio" id="radio-inline-1" name="radio-inline">
          <label class="form-label" for="radio-inline-1">
            Lorem ipsum dolor
          </label>
        </div>
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
