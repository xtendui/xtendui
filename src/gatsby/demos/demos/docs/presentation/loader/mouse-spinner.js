import React from "react"
import path from "path";

import DemoVanillaIframe from "components/demo-vanilla-iframe"
let spinner = require("components/snippets/spinner").default

const demo = {
  name: path.basename(__filename, '.js'),
  js: true,
  css: false,
  full: false
}
demo.htmlSource = `
<div class="list list-space--small align-items--center justify-content--center demo-source-from">
  <div class="card card--secondary">
    <div class="card_design"></div>
    <div class="card_content">
      <h3>Lorem ipsum dolor sit amet</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
      <div class="loader loader--spinner loader--mouse">
        <div class="spinner">
          ` + spinner + `
        </div>
      </div>
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
    demo.jsSource = demo.js ? require("!!raw-loader!./" + demo.name + ".source.js").default : null
    demo.cssSource = demo.css ? require("!!raw-loader!./" + demo.name + ".source.less").default : null
    demo.css = demo.css ? require("!raw-loader!less-loader!./" + demo.name + ".source.less").default : null
    return (
      <DemoVanillaIframe demo={demo}/>
    )
  }
}

export default Page
