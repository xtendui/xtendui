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
      <div data-xt-toggle='{"elements": ".radio", "min": 1}'>
        <div class="form-item--inline">
          <div class="form-item">
            <button type="button" class="checkbox active" data-xt-toggle='{"elements": false}'>
              Lorem ipsum dolor
            </button>
          </div>

          <div class="form-item">
            <button type="button" class="radio active">
              Lorem ipsum dolor
            </button>
          </div>

          <div class="form-item">
            <button type="button" class="radio">
              Lorem ipsum dolor
            </button>
          </div>
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
