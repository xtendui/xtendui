import React from "react"
import path from "path";

import DemoVanillaIframe from "components/demo-vanilla-iframe"

const demo = {
  name: path.basename(__filename, '.js'),
  js: false,
  css: true,
  full: true
}
demo.htmlSource = `
  <div class="demo-cols demo-source-from">
    <div class="row">
      <div class="col--custom-width-percent"></div>
      <div class="col--custom-width-px"></div>
      <div class="col--auto"></div>
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
    demo.jsSource = demo.js ? require("!!raw-loader!./" + demo.name + ".source.js").default : null
    demo.cssSource = demo.css ? require("!!raw-loader!./" + demo.name + ".source.less").default : null
    demo.css = demo.css ? require("!raw-loader!less-loader!./" + demo.name + ".source.less").default : null
    return (
      <DemoVanillaIframe demo={demo}/>
    )
  }
}

export default Page
