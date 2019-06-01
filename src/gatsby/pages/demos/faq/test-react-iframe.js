import React from "react"
import path from "path";

import DemoReactIframe from "components/demo-react-iframe"

const demo = {
  name: path.basename(__filename, '.js'),
  js: true,
  css: true,
  full: true
}
demo.Component = require("./" + demo.name + ".source.js").default

class Page extends React.Component {
  render() {
    demo.jsSource = demo.js ? require("!!raw-loader!./" + demo.name + ".source.js").default : null
    demo.cssSource = demo.css ? require("!!raw-loader!./" + demo.name + ".source.less").default : null
    demo.css = demo.css ? require("!raw-loader!less-loader!./" + demo.name + ".source.less").default : null
    return (
      <DemoReactIframe demo={demo}/>
    )
  }
}

export default Page
